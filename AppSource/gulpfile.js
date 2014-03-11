var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    handlebars = require('gulp-ember-handlebars'),
    es = require('event-stream'),
    gutil = require('gulp-util'),
    extend = require('lodash.assign'),
    handlebars = require('gulp-ember-handlebars'),
    server = lr();
    var http = require('http');
    var path = require('path');
    var ecstatic = require('ecstatic');
var handlebarsSettings = {
    outputType: 'browser', processName: function (sourceFile) {
        return sourceFile.split('/').pop().replace('.html', '').replace('_', '/').toLowerCase();
    }
};
function minispade(data) {
    if (typeof data !== "undefined") {
        if (data.stringify) {
            return es.map(function (file, cb) {
                var filename = file.relative.split('\\').join('/').split('.')[0].toLowerCase();
                var headerText = "minispade.register('" + filename + "',";
                file.contents = Buffer.concat([
                  new Buffer(gutil.template(headerText, extend({ file: file }, data))),
                  new Buffer(JSON.stringify("(function(){" + String(file.contents) + "})();\n//@ sourceURL=" + filename)),
                  new Buffer(gutil.template(");", extend({ file: file }, data)))
                ]);
                cb(null, file);
            });
        }
    }
    return es.map(function (file, cb) {
        var filename = file.relative.split('\\').join('/').split('.')[0].toLowerCase();
        var headerText = "minispade.register('" + filename + "', function(){";
        var footertext = "});\n//@ sourceURL=" + filename;
        file.contents = Buffer.concat([
          new Buffer(gutil.template(headerText, extend({ file: file }, data))),
            file.contents, new Buffer(gutil.template(footertext, extend({ file: file }, data)))
        ]);
        cb(null, file);
    });
};
gulp.task('templates', function () {
    return gulp.src(['src/app/**/*.html'])
        .pipe(handlebars(handlebarsSettings))
        .pipe(concat('templates.js'))
        .pipe(livereload(server))
        .pipe(gulp.dest('dist/scripts'));
});
gulp.task('templates-prod',['templates'], function () {
    return gulp.src(['src/app/**/*.html'])
        .pipe(handlebars(handlebarsSettings))
        .pipe(minispade())
        .pipe(uglify())
        .pipe(concat('templates-min.js'))
        .pipe(gulp.dest('dist/scripts'));
});
gulp.task('scripts', function () {
    return gulp.src(['src/app/**/*.js','!src/**/*_test.js'])
      .pipe(minispade({stringify: true}))
      .pipe(concat('app.js'))
      .pipe(livereload(server))
      .pipe(gulp.dest('dist/scripts'));
});
gulp.task('test-scripts', function () {
    return gulp.src(['src/app/**/*_test.js'])
      .pipe(concat('tests.js'))
      .pipe(livereload(server))
      .pipe(gulp.dest('dist/tests'));
});
gulp.task('scripts-prod',['scripts'], function () {
    return gulp.src(['src/app/**/*.js', '!src/**/*_test.js'])
      .pipe(minispade())
      .pipe(uglify())
      .pipe(concat('app-min.js'))
      .pipe(gulp.dest('dist/scripts'));
});
gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({ compass: true, cacheLocation: 'temp/' }))
        .pipe(livereload(server))
        .pipe(gulp.dest('dist/content/'));
});
gulp.task('sass-prod',['sass'], function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({ compass: true, cacheLocation: 'temp/', style: 'compressed' }))
        .pipe(rename({ suffix: '-min' }))
        .pipe(gulp.dest('dist/content/'));
});
gulp.task('clean', function () {
    return gulp.src(['dist/scripts/*.js', '!dist/scripts/loader.js','temp/', 'dist/content/*.css'], { read: false })
      .pipe(clean());
});
gulp.task('default', ['build']);
gulp.task('build', ['clean','scripts-prod','test-scripts', 'templates-prod', 'sass-prod']);

gulp.task('watch', function () {
    http.createServer(ecstatic({ root: 'dist/' })).listen(8090);
    server.listen(35729);
    gulp.watch(['src/app/**/*.js', '!src/**/*_test.js'], ['scripts']);
    /**
    , function () {
        return gulp.src(arguments[0].path).pipe(jshint())
            .pipe(jshint.reporter('default'));
    }
    */
    
    gulp.watch('src/app/**/*_test.js', ['test-scripts']);
    gulp.watch('src/app/**/*.html', ['templates']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    
});

