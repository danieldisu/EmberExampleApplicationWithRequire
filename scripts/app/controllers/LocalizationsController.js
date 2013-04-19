define(["require","ember", "jquery", "cookies",  "models/Localization"], function(require, Ember, $, cookies){
	var Localization = require("models/Localization");

	var LocalizationsController = Ember.ArrayController.extend({
		localizationList: [],
		selectedLoc : '',
		init : function (){
			this._super();
			this.set("selectedLoc", $.cookie('loc'));

			/* Localization list supported by the App */
			var es = Localization.create({
				name : 'Español',
				value : 'es',
				imgLink : 'img/es.png',
				isSelected : false
			});

			var en = Localization.create({
				name : 'English',
				value : 'en',
				imgLink : 'img/en.png',
				isSelected : false
			})

			if(this.get("selectedLoc") == 'es'){
				es.isSelected = true;
			}else{
				en.isSelected = true;
			}

			this.localizationList.push(es);
			this.localizationList.push(en);

		},
		changeSelectedLoc : function(loc){
			$.cookie('loc', loc.value)
			location.reload();
		}
	});
	return LocalizationsController;
});
