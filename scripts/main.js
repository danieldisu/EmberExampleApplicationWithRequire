(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require(['jquery', 'cookies', "App", "ember", "i18n","store", "controllers/LoginController",
			// Aqui se cargaran todos los ficheros de idioma, aparte de agregarlos al config.js
			"locEs", "locEn"],
			function($, cookies , App, Ember, i18n, store , LoginController){
				$.cookie.json = true
				var app_name = config.app_name || "App";
				var loc = null;

				var options = loadOptions();
				loc = loadLoc(options);
				loadState(options);

				// To-Do quitar el store de la aplicacion, y refactorizar allá donde se use
				App.store = store;
				// To-Do Refactorizar sitios donde estaba STORE
				App.loginController = LoginController;
				
				App.stateManager = Ember.StateManager.create({
					isLogged: false,
					userName: null,
					colorSelected: 'red',
					locSelected: 'en',
					currentState: 'notLoggedin',
					//Creamos una vista para el estado, para not logged será index
					notLoggedin: Ember.State.create({
						init : function(){
							console.log("estado iniciado")
						}
					}),
					loggedIn: Ember.State.create({}),
					loginSuccess: function(manager){
						console.log("loginsuccess")

					}
				});
				Em.I18n.translations = loc;

				Ember.LOG_VERSION = false;
				root[app_name] = App = Ember.Application.create(App);
		});
	});
})(this);
/*
	Funcion que carga el idioma que considere la aplicacion correcto ( basandose en factores como el lenguaje del navegador y los idiomas disponibles ), y escribe una cookie en el navegador
	con la informacion sobre el lenguaje seleccionado.
*/
function loadLoc(options){
	var language;
	if(options.loc != null){
		language = options.loc;
	}else{
		language = guessLanguage();
	}

	var lang;
	switch(language){
		case 'es': 		
			loc = require('locEs'); 
		break;

		case 'es-ES': 	
			loc = require('locEs');
		break;

		case 'en':    		
			loc = require('locEn');
		break;

		case 'en-UK': 	
			loc = require('locEn');
			break;
		case 'en-US': 
			loc = require('locEn');
			break;
	}
	return loc
}
/*
	Funcion interna de loadLoc que elige el lenguaje que considera correcto
*/
function guessLanguage(){
	var selectedLang;

	var supportedLangs = ['en-US', 'en-UK', 'en', 'es', 'es-ES'];

	var userLang = navigator.language;

	if(supportedLangs.contains(userLang)){
		selectedLang = userLang;
	}else{
		selectedLang = "en";
	}

	console.debug("lenguaje elegido "+selectedLang);
	return selectedLang
}

/*
	Funcion que carga las opciones almacenadas en la cookie, devuelve un objeto con notacion JSON con las opciones
*/
function loadOptions(){
	var options = $.cookie('options');
	if(options){
		console.debug("Se ha cargado la cookie de opciones");
	}else{
		// En caso de que no exista la cookie, creamos el objeto options con las opciones por defecto
		options = {
			isLogged : false,
			username : null,
			colorSelected : 'red',
			loc : null
		}
		// Y guardamos la cookie con las opciones por defecto
		$.cookie('options', options)
	}

	return options
}

/*
	Funcion que recupera el estado basandose en las opciones
*/
function loadState(options){
	if(options.isLogged){
		console.debug("Cambiando a estado: isLogged")
	}else{
		console.debug("Cambiando a estado ")
	}
}


