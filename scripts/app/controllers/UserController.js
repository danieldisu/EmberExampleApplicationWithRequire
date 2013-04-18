define(["require","ember", "models/User"], function(require, Ember){
	var User = require("models/User");

	var UserController = Ember.Controller.extend({
		mainUser : null ,
		init : function(){
			var user = this.createUser();

		},
		createUser : function(){
			var user = User.create({});
			return user
		}
	});
	return UserController;
});
