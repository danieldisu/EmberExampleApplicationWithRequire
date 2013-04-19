define(["ember"], function(Ember){
	var ApplicationController = Ember.Controller.extend({
		needs : ['Localizations'],
		init : function(){
			this._super();	
		},
		changeSelectedLoc : function(loc){
			var locCont = this.get("controllers.Localizations");
			locCont.changeSelectedLoc(loc);
		}
	});


	return ApplicationController;
}); 
