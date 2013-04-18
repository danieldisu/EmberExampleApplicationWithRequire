define({
	app_name: "App", 
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		'i18n' :{
			deps: ['handlebars' , 'ember']
		}
	},
	paths : {
		'App': 'app/main',		
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
		'routes': 'app/routes',
    		'templates': 'app/templates',
		/*libs*/
		'jquery': 'libs/jquery/1.9.1/jquery',
		'cookies' : 'libs/jquery-plugins/cookies',
		'handlebars': 'libs/handlebars/1.0.rc.3/handlebars',
		'ember': 'libs/ember/1.0.0-rc.2/ember',
		'i18n': 'libs/ember-i18n/i18n',
		/*requirejs-plugins*/
		'text': 'libs/requirejs-plugins/text',
		'hbs': 'libs/requirejs-plugins/hbs',
		'domReady': 'libs/requirejs-plugins/domReady',
		/* Ficheros de textos */
		'locEs': 'loc/es',
		'locEn': 'loc/en',
		'store' : 'app/store'
	},
	/*hbs plugin options*/
	hbs: {
		disableI18n: false,
		templateExtension: "html"
	}

}); 

