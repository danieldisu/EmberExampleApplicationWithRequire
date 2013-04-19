define(["ember"], function(Ember){
	StateManager= Ember.StateManager.extend({
		isLogged: false,
		userName: null,
		colorSelected: 'red',
		locSelected: 'en',
		//Creamos una vista para el estado, para not logged será index
		notLoggedIn: Ember.State.create({
			enter: function(){
				console.log("Estado : not Logged In ")
			}
		}),
		loggedIn: Ember.State.create({
			enter : function(a){
				console.log("Estado : logged In ")
				
			}
		}),
		loginSuccess: function(manager){
			this.transitionTo("loggedIn")
			App.Router.router.transitionTo("menu.index")
		}
	});

	return StateManager;
}); 
