var app = angular.module('myapp', ['ngDragDrop','ngSanitize']);

app.controller('MainCtrl', function($scope) {
  $scope.f = [
      { 'function': '<img src=\"imgs\/Webtoys.ico\"\/><label> Add<\/label> </br>' , 'display' : "<table><tr><td>Add </td><td><img src=\"imgs\/Webtoys.ico\"\/> <\/td><td><div class=\"dotted\"><\/div><\/td><td><div class=\"dotted\"><\/div><\/td><\/tr><\/table> "},
	  { 'function': '<img src=\"imgs\/Itzikgur.ico\"\/>Subtract </br>', 'display': "<table><tr><td>Subtract </td><td><img src=\"imgs\/Itzikgur.ico\"\/> <\/td><td><div class=\"dotted\"><\/div><\/td><td><div class=\"dotted\"><\/div><\/td><\/tr><\/table> "} ,
      { 'function': '<img src=\"imgs\/Webtoys2.ico\"\/>Foo </br>' , 'display' : "<table><tr><td>Foo </td><td><img src=\"imgs\/Webtoys2.ico\"\/> <\/td><td><div class=\"dotted\"><\/div><\/td><td><div class=\"dotted\"><\/div><\/td><td><div class=\"dotted\"><\/div><\/td><\/tr><\/table> "},
      { 'function': '<img src=\"imgs\/Webtoys.ico\"\/>doSomethingComplicated </br>' , 'display' : "<table><tr><td>doSomethingComplicated </td><td><img src=\"imgs\/Webtoys.ico\"\/> <\/td><td><div class=\"dotted\"><\/div><\/td><\/tr><\/table> "}
      
      
	  ];
	 

	  $scope.draggedItems = [];
      
      $scope.dropSuccessHandler = function($event,index,array){
	//	array.splice(index,1);
      };
      
      $scope.onDrop = function($event,$data,array){
		  array.push($data);
       };
});
