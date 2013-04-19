define(["require","ember", "jquery", "cookies",  "models/Localization"], function(require, Ember, $, cookies){
	var Localization = require("models/Localization");

	var LocalizationsController = Ember.ArrayController.extend({
		localizationList: [],
		init : function (){
			this._super();

			/* Localization list supported by the App */
			var es = Localization.create({
				name : 'español',
				value : 'es',
				imgLink : 'img/es.png',
				isSelected : false
			});

			var en = Localization.create({
				name : 'english',
				value : 'en',
				imgLink : 'img/en.png',
				isSelected : false
			})

			/*
				Este if sirve para cargar una clase u otra para estilar el lenguaje seleccionado
			*/
			if( App.stateManager.locSelected == 'es' ){
				es.isSelected = true;
			}else{
				en.isSelected = true;
			}

			this.localizationList.push(es);
			this.localizationList.push(en);

		},
		changeSelectedLoc : function(loc){
			if(loc.value != App.stateManager.locSelected){
				App.stateManager.set("locSelected", loc.value);
				App.stateManager.saveState();
				location.reload();
			}

		}
	});
	return LocalizationsController;
});
