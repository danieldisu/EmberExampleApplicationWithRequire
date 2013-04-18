define([
	"ember",
	"text!templates/menuWatchColorTemplate.html"
], function(Ember, menuWatchColorTemplate) {
	var MenuWatchColorView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(menuWatchColorTemplate)
	});
	return MenuWatchColorView;
});