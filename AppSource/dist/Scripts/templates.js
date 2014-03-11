Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div id=\"ember-page\">\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["application/layout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \r\n");
  return buffer;
  
});
Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Index template");
  
});
Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("LOADING....");
  
});
Ember.TEMPLATES["datepicker"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n    <div class=\"input-append date datepicker inline-block\">\r\n        <input type=\"text\" class=\"date-pad\"/>\r\n        <span class=\"add-on\"><i class=\"icon-calendar\"></i></span>\r\n    </div>\r\n");
  }

  stack1 = helpers['with'].call(depth0, "view", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});
Ember.TEMPLATES["fileuploader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n");
  stack1 = helpers._triageMustache.call(depth0, "warnings", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n<!--<input id=\"file2\" type=\"file\" name=\"files[]\" data-url=\"api/file/\" multiple>-->\r\n");
  stack1 = helpers._triageMustache.call(depth0, "fileref", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n<td colspan=\"2\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': ("haveFile:hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\r\n    <div class=\"fileInputDrop\">\r\n        <div class=\"fileInput\">\r\n            <a href=\"#\" class=\"btn\">Last opp fil</a>\r\n            <span class=\"fileName\"></span>\r\n            <input class=\"pointer\" id=\"fileupload\" type=\"file\" name=\"files[]\" data-url=\"https://api-atbiutv.nbsstdlab.no/file/\" multiple>\r\n            <!--<input class=\"pointer\" type=\"file\" id=\"File1\">-->\r\n        </div>\r\n        <i class=\"info init\">eller <strong>dra og slipp</strong> filen her</i>\r\n        <i class=\"info drag\"><strong>Slipp filen her</strong></i>\r\n    </div>\r\n</td>\r\n<td colspan=\"2\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'class': ("haveFile::hide")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\r\n    <div class=\"data-table\">\r\n        <table>\r\n            <thead>\r\n                <tr>\r\n                    <th colspan=\"1\">Uploaded document</th>\r\n                    <th colspan=\"1\"></th>\r\n                </tr>\r\n                <tr class=\"shadow\"><th colspan=\"2\"></th></tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td style=\"width:30%;\">\r\n                        <div class=\"file pdf\">\r\n                            <a >");
  stack1 = helpers._triageMustache.call(depth0, "file.lazydocumenttype.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\r\n                            \r\n                            <div class=\"progress\">\r\n                                <div class=\"bar\" ></div>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                Saving: \r\n                            </div>\r\n                            \r\n                            ");
  stack1 = helpers.unless.call(depth0, "isUploading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </div>\r\n                    </td>\r\n                    <td style=\"width: 5%;\" class=\"actions\">\r\n                        <a  class=\"delete\">delete</a>\r\n                    </td>    \r\n                </tr>\r\n                                       \r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</td>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                            <div class=\"details\">\r\n                                Last updated \r\n                            </div>\r\n                            <div class=\"details\">\r\n                                Name:  \r\n                            </div>\r\n                            ");
  return buffer;
  }

  data.buffer.push("\r\n\r\n");
  stack1 = helpers['with'].call(depth0, "view", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  data.buffer.push(escapeExpression((helper = helpers.Errorbox || (depth0 && depth0.Errorbox),options={hash:{
    'content': ("view.warnings")
  },hashTypes:{'content': "ID"},hashContexts:{'content': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "Errorbox", options))));
  data.buffer.push("\r\n");
  return buffer;
  
});