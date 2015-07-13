$(function(){

	var HelloView = Backbone.View.extend({
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.append("<h1>Hi, im backbone.</h1>");
		}
	});


	var helloView = new HelloView({el: $('body')});




});