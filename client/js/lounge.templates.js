(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['chan'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-target=\"#chan-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"chan "
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\n	<span class=\"badge"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.highlight : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-count=\""
    + alias4(((helper = (helper = helpers.unread || (depth0 != null ? depth0.unread : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unread","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.unread : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n	<span class=\"close\"></span>\n	<span class=\"name\" title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " highlight";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.unread || (depth0 != null ? depth0.unread : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"unread","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.channels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['chat'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"chan-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-target=\"#chan-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"chan "
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"header\">\n		<button class=\"lt\"></button>\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"channel",{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<button class=\"menu\"></button>\n		<span class=\"title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n		<span class=\"topic\">"
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || alias2).call(alias1,(depth0 != null ? depth0.topic : depth0),{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n	</div>\n	<div class=\"chat\">\n		<div class=\"show-more "
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.messages : depth0)) != null ? stack1.length : stack1),100,{"name":"equal","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n			<button class=\"show-more-button\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n				Show more\n			</button>\n		</div>\n		<div class=\"messages\"></div>\n	</div>\n	<aside class=\"sidebar\">\n		<div class=\"users\">\n			"
    + alias4((helpers.partial || (depth0 && depth0.partial) || alias2).call(alias1,"user",{"name":"partial","hash":{},"data":data}))
    + "\n		</div>\n	</aside>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "			<button class=\"rt\"></button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "show";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.channels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['contextmenu_divider'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<li class=\"context-menu-divider\" />\n";
},"useData":true});
templates['contextmenu_item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " data-data=\""
    + container.escapeExpression(((helper = (helper = helpers.data || (depth0 != null ? depth0.data : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"data","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"context-menu-item context-menu-"
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" data-action=\""
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data}) : helper)))
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n	"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\n</li>\n";
},"useData":true});
templates['msg'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " self";
},"3":function(container,depth0,helpers,partials,data) {
    return " highlight";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "		<a href=\"#\" class=\"user\" style=\"color: #"
    + alias3((helpers.stringcolor || (depth0 && depth0.stringcolor) || alias2).call(alias1,(depth0 != null ? depth0.from : depth0),{"name":"stringcolor","hash":{},"data":data}))
    + "\" data-name=\""
    + alias3(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias3(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "		<span class=\"text\">\n			<div class=\"force-newline\">\n				<button id=\"toggle-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"toggle-button\">···</button>\n			</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.toggle : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((helpers.partial || (depth0 && depth0.partial) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"toggle",{"name":"partial","hash":{},"data":data}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<span class=\"text\">"
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"msg "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.self : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.highlight : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<span class=\"time\">\n		"
    + alias3((helpers.tz || (depth0 && depth0.tz) || alias2).call(alias1,(depth0 != null ? depth0.time : depth0),{"name":"tz","hash":{},"data":data}))
    + "\n	</span>\n	<span class=\"from\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.from : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</span>\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"toggle",{"name":"equal","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "	</span>\n</div>\n";
},"useData":true});
templates['msg_action'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " self";
},"3":function(container,depth0,helpers,partials,data) {
    return " highlight";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"msg "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.self : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.highlight : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<span class=\"time\">\n		"
    + alias3((helpers.tz || (depth0 && depth0.tz) || alias2).call(alias1,(depth0 != null ? depth0.time : depth0),{"name":"tz","hash":{},"data":data}))
    + "\n	</span>\n	<span class=\"from\"></span>\n	<span class=\"text\">\n		"
    + alias3((helpers.partial || (depth0 && depth0.partial) || alias2).call(alias1,(depth0 != null ? depth0.template : depth0),{"name":"partial","hash":{},"data":data}))
    + "\n	</span>\n</div>\n";
},"useData":true});
templates['network'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"network-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"network\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-nick=\""
    + alias4(((helper = (helper = helpers.nick || (depth0 != null ? depth0.nick : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nick","hash":{},"data":data}) : helper)))
    + "\">\n	"
    + alias4((helpers.partial || (depth0 && depth0.partial) || alias2).call(alias1,"chan",{"name":"partial","hash":{},"data":data}))
    + "\n</section>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.networks : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['toggle'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"toggle-content\">\n"
    + ((stack1 = (helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.type : depth0),"image",{"name":"equal","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\n			<img src=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">\n		</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thumb : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<div class=\"head\">"
    + alias4(((helper = (helper = helpers.head || (depth0 != null ? depth0.head : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"head","hash":{},"data":data}) : helper)))
    + "</div>\n			<div class=\"body\">\n				"
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "\n			</div>\n		</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<img src=\""
    + container.escapeExpression(((helper = (helper = helpers.thumb || (depth0 != null ? depth0.thumb : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"thumb","hash":{},"data":data}) : helper)))
    + "\" class=\"thumb\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.toggle || (depth0 != null ? depth0.toggle : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"toggle","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.toggle) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['user'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"count\">\n	<input class=\"search\" placeholder=\""
    + container.escapeExpression((helpers.users || (depth0 && depth0.users) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.users : depth0)) != null ? stack1.length : stack1),{"name":"users","hash":{},"data":data}))
    + "\">\n</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return ((stack1 = (helpers.diff || (depth0 && depth0.diff) || alias2).call(alias1,(depth0 != null ? depth0.mode : depth0),{"name":"diff","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<button class=\"user\" style=\"color: #"
    + alias3((helpers.stringcolor || (depth0 && depth0.stringcolor) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"stringcolor","hash":{},"data":data}))
    + "\" data-name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers.unless.call(alias1,(data && data.first),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<div class=\"user-mode "
    + container.escapeExpression((helpers.modes || (depth0 && depth0.modes) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.mode : depth0),{"name":"modes","hash":{},"data":data}))
    + "\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.users : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"names\">\n	<div class=\"inner\">\n		"
    + ((stack1 = (helpers.diff || (depth0 && depth0.diff) || helpers.helperMissing).call(alias1,"reset",{"name":"diff","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.users : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n";
},"useData":true});
templates['actions/action'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\n<span class=\"action-text\">"
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || alias2).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"useData":true});
templates['actions/invite'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "	you\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\ninvited\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.invitedYou : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "to\n"
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || alias2).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['actions/join'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\n<i class=\"hostmask\">("
    + alias4(((helper = (helper = helpers.hostmask || (depth0 != null ? depth0.hostmask : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hostmask","hash":{},"data":data}) : helper)))
    + ")</i>\nhas joined the channel\n";
},"useData":true});
templates['actions/kick'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<i class=\"part-reason\">("
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + ")</i>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\nhas kicked\n<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + "</a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['actions/mode'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\nsets mode\n"
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || alias2).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});
templates['actions/nick'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\nis now known as\n<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"useData":true});
templates['actions/part'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<i class=\"part-reason\">("
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + ")</i>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\n<i class=\"hostmask\">("
    + alias4(((helper = (helper = helpers.hostmask || (depth0 != null ? depth0.hostmask : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hostmask","hash":{},"data":data}) : helper)))
    + ")</i>\nhas left the channel\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['actions/quit'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<i class=\"quit-reason\">("
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + ")</i>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\n<i class=\"hostmask\">("
    + alias4(((helper = (helper = helpers.hostmask || (depth0 != null ? depth0.hostmask : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hostmask","hash":{},"data":data}) : helper)))
    + ")</i>\nhas quit\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['actions/topic'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "	The topic is:\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<a href=\"#\" class=\"user\" data-name=\""
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.mode || (depth0 != null ? depth0.mode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mode","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"from","hash":{},"data":data}) : helper)))
    + "</a>\n	has changed the topic to:\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isSetByChan : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n<span class=\"new-topic\">"
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"useData":true});
templates['actions/whois'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div>\n	<a href=\"#\" class=\"user\" data-name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "</a>\n	is on the following channels:\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.channels : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		"
    + ((stack1 = (helpers.parse || (depth0 && depth0.parse) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"parse","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div>\n	<a href=\"#\" class=\"user\" data-name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "</a>\n	is connected to "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.server : stack1), depth0))
    + "\n</div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div>\n	<a href=\"#\" class=\"user\" data-name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "</a>\n	is away <i>("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.away : stack1), depth0))
    + ")</i>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div>\n	<a href=\"#\" class=\"user\" data-name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.nickname : stack1), depth0))
    + "</a>\n	<i class=\"hostmask\">("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.username : stack1), depth0))
    + "@"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.hostname : stack1), depth0))
    + ")</i>:\n	<b>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.realname : stack1), depth0))
    + "</b>\n</div>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.channels : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.server : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.whois : depth0)) != null ? stack1.away : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();