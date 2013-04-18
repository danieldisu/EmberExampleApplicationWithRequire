define(['ember'],function(Ember){

	MenuSelectColorController = Ember.Controller.extend({
		needs: ['Color', 'Colors'],
		init: function(){
			this._super();
		},
		changeSelectedColor : function(newColor){
			var colorController = this.get("controllers.Color");
			colorController.changeSelectedColor(newColor.name);
		}
	});
	return MenuSelectColorController;
});