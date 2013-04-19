define(["ember"], function(Ember){
	var loginController = Ember.Object.create({
		userName: '',
		repeatedUserName: '',
		hasError: false,
		errorMismatch: false,
		errorEmpty: false,
		attemptLogin: function(view){
			//Reinicializamos las variables de error
			this.set('hasError', false);
			this.set('errorMismatch', false);
			this.set('errorEmpty',false);
			var userName = this.get('userName');
				repeatedUserName = this.get('repeatedUserName');
			console.log('attemptLogin');
			//Añadir comprobacion de que no esten vacios
			if(userName != "" || repeatedUserName != ""){
				if(userName == repeatedUserName){
					
					App.stateManager.loginSuccess("vacioManager", userName);
				}
				else {
					this.set('hasError', true);
					this.set('errorMismatch', true);
				}	
			}else{
				this.set('hasError', true);
				this.set('errorEmpty',true);
			}
			
		}
	 });
	return loginController;
}); 
