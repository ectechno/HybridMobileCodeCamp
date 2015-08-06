// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform, $cordovaHealthKit) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
      $cordovaHealthKit.isAvailable().then(function(){
       var permissions = ['HKQuantityTypeIdentifierHeight'];
          
        $cordovaHealthKit.requestAuthorization(
        permissions,
        permissions
        ).then(function(){
            
        });
    }, function(){
       
      });
  });
})

.controller('AppCtrl', function($cope, $cordovaHealthKit){
    $scope.body = {
        height: ''
    };
 $scope.saveHeight = function(){
 
 $cordovaHealthKit.saveHeight($scope.body.height, 'feet').then(function(v){
 
 }, function(err){
    console.log(err);
 });
 };   
    
    $scope.getHeight = function(){
    $cordovaHealthKit.readHeight('feet').then(function(v){
    alert('Your Height:' + v.value + ' ' + v.unit);
    });
    
    };
    
    $scope.saveWorkout = function(){
        $cordovaHealthKit.saveWorkout(  
            {
        'activityType': 'HKWorkoutActivityTypeCycling',
        'quantityType': 'HKQuantitytypeIdentifierDistanceCycling',
        'startDate': new Date(),
        'endDate': null,
        'duration': 3600,
        'energy': 300,
        'energyunit': 'kcal',
        'distance': '11',
        'distanceUnit': 'km'
                
        }).then(function(y){
        alert(JSON.stringify(y));
        });
    };
    
    $scope.getWorkouts = function(){
     $cordovaHealthKit.findWorkouts().then(function(y){
        alert(JSON.stringify(v));
     });
    };
    
});
