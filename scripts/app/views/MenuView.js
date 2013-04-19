define([
	"ember",
	"text!templates/menuTemplate.html",
	"app/StateManager"
], function(Ember, menuTemplate) {
	var sm = require("app/StateManager");
	console.log("view loaded")
	var MenuView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(menuTemplate)
	});
	return MenuView;
});