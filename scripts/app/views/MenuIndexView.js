define([
	"ember",
	"text!templates/menuIndexTemplate.html"
], function(Ember, menuIndexTemplate) {
	var MenuIndexView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(menuIndexTemplate)
	});
	return MenuIndexView;
});