define(["ember"], function(Ember){
var Router = Ember.Router.extend({});

Router.map(function(){
this.resource("menu",{path : "/menu" },function(){
		this.route("selectColor");
		this.route("watchColor");
	})
})

	return Router;
});
