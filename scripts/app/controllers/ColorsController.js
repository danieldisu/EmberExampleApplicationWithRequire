define(["require","ember", "models/Color"], function(require, Ember){
	var Color = require("models/Color");
	var ColorsController = Ember.ArrayController.extend({
		colors: [],
		init : function (){
			this._super();
			/* Creacion del array inicial de colores. */
			var color1 = Color.create({name: 'red'})
			var color2 = Color.create({name: 'yellow'})
			var color3 = Color.create({name: 'blue'})
			this.colors.push(color1)
			this.colors.push(color2)
			this.colors.push(color3)
		},
		showColors: function(){
			/* Funcion básica para ver que se a creado el array de colores */
			for(var i = 0; i< this.colors.length; i++){
				console.log(this.colors[i].get('name'));
			}
		}
	});
	return ColorsController;
});
