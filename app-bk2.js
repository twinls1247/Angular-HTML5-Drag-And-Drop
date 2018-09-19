var app = angular.module('plunker', ['ngDragDrop']);

app
  .controller('MainCtrl', function ($scope) {
    $scope.functions = [
      {
        name: 'findMax',
        argumentCount: 3,
        iconUrl: 'imgs/Itzikgur.ico',
		description: 'Example: function findMax(1, 123, 500)',
		fields: []
      },
      {
        name: 'findMin',
        argumentCount: 2,
        iconUrl: 'imgs/Webtoys.ico',
		description: 'Example: function findMin(4, -4)',
		fields: []
      },
      {
        name: 'sumAll',
        argumentCount: 5,
        iconUrl: 'imgs/Webtoys2.ico',
		description: 'Example: function sumAll(5, 100, 23, 1, 4)',
		fields: []
      }
    ];

	$scope.onDrop = function ($event, $data) {
		$scope.result = '';
		$scope.droppedFunction = $data;
    };

    $scope.clearExpressionArea = function () {
		$scope.droppedFunction = null;
	};

	$scope.calculateVal = function ($data) {
		const { name } = $data;
		let fields = document.getElementsByClassName('dynamic-input');
		fields = Array.from(fields).map(i => parseInt(i.value)); 
		if (name === 'findMax') {
			$scope.result = Math.max(...fields);
		} else if (name === 'findMin') {
			$scope.result = Math.min(...fields);
		} else {
			$scope.result = fields.reduce((a,b) => a+b, 0);
		}
	}	
  })

.filter('range', function () {
    return function (input, length) {
      return new Array(parseInt(length));
    };
});

$scope.values = {};

$scope.$watch('selectedFunction', function (newVal, oldVal) {
	$scope.parameters = $scope.selectedFunction.fields;
});



