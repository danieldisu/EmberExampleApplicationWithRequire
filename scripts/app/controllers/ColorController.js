define(["require","ember", "models/Color"], function(require, Ember){
	var Color = require("models/Color");
	var ColorController = Ember.Controller.extend({
		selectedColor: null,
		changeSelectedColor: function(newSelectedColor){
			console.log("cambiando color")
			this.get('selectedColor').set("name", newSelectedColor);
		},
		init: function (){
			this._super();
			var firstColor = Color.create({});
			firstColor.set('name', 'red');
			this.set("selectedColor", firstColor);
		},
		showColor: function(){
			/* Función básica para ver si hemos cambiado el color */
			console.log("Color actual: "+this.selectedColor.get('name'));
		}
	});
	return ColorController;
});
