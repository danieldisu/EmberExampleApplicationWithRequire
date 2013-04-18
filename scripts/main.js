(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require(['jquery', 'cookies', "App", "ember", "i18n", "store",
			// Aqui se cargaran todos los ficheros de idioma, aparte de agregarlos al config.js
			"locEs", "locEn"],
			function($, cookies , App, Ember, i18n, store){
				var app_name = config.app_name || "App";
				var loc = null;
			//Comprobamos si existe la cookie que nos diga que idioma quiere el usuario
			if(!$.cookie('loc')){
				// En caso de no existir la cookie, averiguamos el idioma del navegador del usuario y comprobamos que este en la lista de idiomas soportados
				if(navigator.language != "en" || navigator.language != "en-UK" || navigator.language != "en-US"){
					var langList = ['es','es-ES'];
					var navLanguage = navigator.language;
					if(langList.contains(navLanguage)){

						loc = loadLoc(navLanguage);
					}else{
						//En caso de que el idioma del navegador del usuario no tenga soporte se pone por defecto el Inglés
						loc = require('locEn');
					}
				}
			} // En caso de existir una cookie de idioma, cargamos el idioma seleccionado por la cookie
			else{
				var selectedLoc = $.cookie('loc');
				loc = loadLoc(selectedLoc);
			}


			/*
				Funcion que carga el idioma que considere la aplicacion correcto ( basandose en factores como el lenguaje del navegador y los idiomas disponibles ), y escribe una cookie en el navegador
				con la informacion sobre el lenguaje seleccionado.
			*/
			function loadLoc(language){
				var lang;
				switch(language){
					case 'es': 		
						lang = require('locEs'); 
						$.cookie('loc', 'es');
					break;

					case 'es-ES': 	
						lang = require('locEs');
						$.cookie('loc', 'es');
					break;

					case 'en':    		
						lang = require('locEn');
						$.cookie('loc', 'en');
					break;

					case 'en-UK': 	
						lang = require('locEn');
						$.cookie('loc', 'en');
						break;
					case 'en-US': 
						lang = require('locEn');
						$.cookie('loc', 'en');
						break;
				}
				return lang
			}




			App.store = store;
			Em.I18n.translations = loc;
			root[app_name] = App = Ember.Application.create(App, {LOG_TRANSITIONS: true});
		});
	});
})(this);