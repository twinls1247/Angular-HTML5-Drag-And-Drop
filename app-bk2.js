var app = angular.module('plunker', ['ngDragDrop']);

app
  .controller('MainCtrl', function ($scope) {
    $scope.functions = [
      {
        name: 'findMax',
        argumentCount: 3,
        iconUrl: 'imgs/Itzikgur.ico',
        description: 'Example: function findMax(1, 123, 500)'
      },
      {
        name: 'findMin',
        argumentCount: 2,
        iconUrl: 'imgs/Webtoys.ico',
        description: 'Example: function findMin(4, -4)'
      },
      {
        name: 'sumAll',
        argumentCount: 5,
        iconUrl: 'imgs/Webtoys2.ico',
        description: 'Example: function sumAll(5, 100, 23, 1, 4)'
      }
    ];

    $scope.onDrop = function ($event, $data) {
      $scope.droppedFunction = $data;
    };

    $scope.clearExpressionArea = function () {
      $scope.droppedFunction = null;
    };
  })

  .filter('range', function () {
    return function (input, length) {
      return new Array(parseInt(length));
    };
  });

