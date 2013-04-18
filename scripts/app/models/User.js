define(["require","ember"], function(require, Ember){
	return Ember.Object.extend({
		name : "",
		nameRepeated : "",
		isInvalid : function(){
			var invalid = true;
			var firstName = this.get("name");
			var secondName =  this.get("nameRepeated");
			if(firstName != "" && secondName != "" && (firstName == secondName)){
				invalid = false;
			}
			return invalid;
		}.property("name","nameRepeated"),

		isEmpty : function(){
			var empty = true;
			var firstName = this.get("name");
			var secondName =  this.get("nameRepeated");
			if(firstName != "" && secondName != "" || firstName != "" && secondName == ""){
				empty = false;
			}
			return empty;
		}.property("name","nameRepeated")
	});
});