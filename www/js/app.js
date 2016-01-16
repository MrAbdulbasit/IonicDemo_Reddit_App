(function(){
var app = angular.module('demoReddit', ['ionic'])
    app.controller('RedditCtrl',function($http ,$scope){
      $scope.stories = [];
      $http.get('http://www.reddit.com/r/Android/new/.json')
          .success(function(response){
            console.log(response)
          //$scope.artists = data;
      })


    })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
}())