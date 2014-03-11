##########################################################################################################
Install required software
##########################################################################################################
##########################################################################################################

###### NODE
The build tools and runned inside NodeJS. Download and install NodeJS 
from http://nodejs.org/download/. Download the newest version.

###### GIT
The best shell to run the build tools in are Git Bash. Download and install Git for windows
at http://msysgit.github.io/ Download the newest version.

###### Ruby 
To run the SASS/LESS (stylesheets) compiler you need to install Ruby. This step can be ignored but 
you will get warnings in the console if you try to compile the Compass sass files.

Download and install the latest version from http://rubyinstaller.org/. Make sure that Ruby is in
the windows PATH. The install tool should have options for doing this. If not.... google it.
You might also have to install the Dev kit (SDK), http://rubyinstaller.org/downloads/ (at the bottom). You can find the installation instructions here: https://github.com/oneclick/rubyinstaller/wiki/Development-Kit. 

###### Verify installations
Open your Git Bash console.

type> node -v 
You should see your Node version printed out to the console.

type> ruby -v
You should see your Ruby version printed out to the console.
If no version of ruby excists you probably missed the PATH thing on the 
install options above. Google it.

type> git 
You should see a list of git commands.


##########################################################################################################
Install extension dependencies
##########################################################################################################
The task runner for our build tools uses the node plugin called Gulp. Some of these plugins need to be 
installed in the "global" node store but most are installed at your local project.

## First install gulp to the global packages. In you bash console
type> npm install -g gulp

## Now you need to navigate to your project folder. The gulpfile.js should be in the root.
## Theese addons will be installed in your project folder. Don´t include any node_modules in your source controll. 
type> npm install

## If this fails you can try to install all the dependencies directly by: 
type> npm install gulp gulp-util gulp-ember-handlebars ecstatic http path event-stream gulp-util lodash.assign gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-clean gulp-rename gulp-livereload tiny-lr gulp-cache --save-dev

##You will also need the "Compass" extension for Ruby. In the console 
type> gem install compass


##########################################################################################################
Run the build scripts
##########################################################################################################

You should always stand in the folder where the gulpfile.js are located. This should be the source of the project.
Theese are the available build commands.

##The default build tasks, same as bulp build
gulp 

##Runs all build tasks
gulp build

##Runs the server and livereload, this task opens a webserver at localhost:8090 and listens to file changes and triggers 
##correct build based on what was changed.
gulp watch

