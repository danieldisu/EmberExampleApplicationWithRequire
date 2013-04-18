define([
	"app/router",
	"routes/IndexRoute",
	"routes/MenuIndexRoute",
	"routes/MenuRoute",
	"routes/MenuSelectColorRoute",
	"routes/MenuWatchColorRoute",
	"controllers/MenuSelectColorController",
	"controllers/MenuWatchColorController",
	"controllers/ApplicationController",
	"controllers/UserController",
	"controllers/ColorController",
	"controllers/ColorsController",
	"controllers/IndexController",
	"controllers/LocalizationsController",
	"views/IndexView",
	"views/ApplicationView",
	"views/MenuView",
	"views/MenuIndexView",
	"views/MenuSelectColorView",
	"views/MenuWatchColorView"
	//AÑADIR LOCALIZATION
], function(){
	/* Router */
	var Router = require("app/router");

	/* Global */
	var ApplicationView = require("views/ApplicationView");	
	var ApplicationController = require("controllers/ApplicationController");

	/* Localizacion */
	var LocalizationsController = require("controllers/LocalizationsController");
	
	/* Controladores globales */
	var UserController = require("controllers/UserController");
	var ColorController = require("controllers/ColorController");
	var ColorsController = require("controllers/ColorsController");
	
	/* Index */
	var IndexView = require("views/IndexView");
	var IndexController = require("controllers/IndexController");
	var IndexRoute = require("routes/IndexRoute");
	
	/*Menu*/
	var MenuView = require("views/MenuView");
	var MenuRoute = require("routes/MenuRoute");

	/*Menu index*/
	var MenuIndexRoute = require("routes/MenuIndexRoute");
	var MenuIndexView = require("views/MenuIndexView");

	/* MenuSelect */
	var MenuSelectColorView = require("views/MenuSelectColorView");
	var MenuSelectColorRoute = require("routes/MenuSelectColorRoute");
	var MenuSelectColorController = require ("controllers/MenuSelectColorController");
	
	/*MenuWatch*/
	var MenuWatchColorView = require("views/MenuWatchColorView");
	var MenuWatchColorRoute = require("routes/MenuWatchColorRoute");
	var MenuWatchColorController = require("controllers/MenuWatchColorController");

	/*Module Pattern*/
	var App = {
		Router: Router,
		ApplicationView: ApplicationView,
		ApplicationController: ApplicationController,
		UserController: UserController,
		ColorController: ColorController,
		ColorsController: ColorsController,
		LocalizationsController : LocalizationsController,	
		IndexView : IndexView,		
		IndexController : IndexController,		
		IndexRoute : IndexRoute,
		MenuView: MenuView,
		MenuRoute: MenuRoute,
		MenuIndexRoute: MenuIndexRoute,
		MenuIndexView: MenuIndexView,
		MenuSelectColorView: MenuSelectColorView,
		MenuSelectColorController: MenuSelectColorController,
		MenuSelectColorRoute: MenuSelectColorRoute,
		MenuWatchColorView: MenuWatchColorView,
		MenuWatchColorRoute: MenuWatchColorRoute,
		MenuWatchColorController: MenuWatchColorController
	};

	return App;
});
