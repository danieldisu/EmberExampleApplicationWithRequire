define([
	"ember",
	"text!templates/menuTemplate.html"
], function(Ember, menuTemplate) {
	var MenuView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(menuTemplate)
	});
	return MenuView;
});