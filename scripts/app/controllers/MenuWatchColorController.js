define(['ember'],function(Ember){

	MenuWatchColorController = Ember.Controller.extend({
		needs: ['Color', 'Colors'],
		init: function(){
			this._super();
		}
	});
	return MenuWatchColorController;
});