define(["require","ember", "models/Color"], function(require, Ember){
	var Color = require("models/Color");
	var ColorController = Ember.Controller.extend({
		init: function (){
			this._super();
		}
	});
	return ColorController;
});
