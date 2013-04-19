define(['ember'],function(Ember){

	MenuSelectColorController = Ember.Controller.extend({
		needs: ['Color', 'Colors'],
		init: function(){
			this._super();
		},
		changeSelectedColor : function(newColor){
			App.stateManager.set("colorSelected", newColor.name);
			App.stateManager.saveState();
		}
	});
	return MenuSelectColorController;
});