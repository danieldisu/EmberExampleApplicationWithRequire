define([
	"ember",
	"text!templates/menuSelectColorTemplate.html"
], function(Ember, menuSelectColorTemplate) {
	var MenuSelectColorView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(menuSelectColorTemplate)
	});
	return MenuSelectColorView;
});