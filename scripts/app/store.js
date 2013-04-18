define(["models/User"], function(User){
		
	var Store = {
		mainUser : User.create({}),
		selectedColor: 'red',
		colors: null
	};


	return Store;
})