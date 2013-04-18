define(["ember"], function(Ember){
	var loginController = Ember.Object.create({
		userName: '',
		repeatedUserName: '',
		hasError: false,
		errorMsg: '',
		attemptLogin: function(view){
			var userName = this.get('userName');
				repeatedUserName = this.get('repeatedUserName');
			console.log('attemptLogin');
			//Añadir comprobacion de que no esten vacios
			if(userName == repeatedUserName){
				console.log('Nombres coinciden');
				App.stateManager.loginSuccess();
			}
		}
	 });
	return loginController;
}); 
