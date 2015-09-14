var app=angular.module('starter', ['ionic'])
    .config(function($ionicConfigProvider)
    {if(ionic.Platform.isAndroid())$ionicConfigProvider.scrolling.jsScrolling(true);
    })
 
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login')

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller:'LoginCtrl'
    })
  
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller:'HomeCtrl'
    })
      
        
        .state('speakers',{
            url:'/speakers',
            templateUrl:'templates/speakers.html',
            controller:'SpeakerCtrl'
        
    }) 
       
        .state('gallery',{
            url:'/gallery',
            templateUrl:'templates/gallery.html',
        controller:'GalleryCtrl'
        
    })
        
        .state('camera',{
            url:'/camera',
            templateUrl:'templates/camera.html',
        controller:'CameraCtrl'
    })
})

//login
app.controller('LoginCtrl', function($scope, $state, $ionicPopup) {

    $scope.login= function(user) {
        var pw = user.password;
        var un   = user.username;
        if (un=='dinuka' && pw=='123')  {
            $state.go('home');
        }else {
            console.log('error');
            $ionicPopup.alert({
                title: 'Please enter a valid username,password',
                okType: 'button-assertive'
            }).then(function (password) {
                
            });
        }
     };
})

//side menu
  app.controller('HomeCtrl',function($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft=function () {
            $ionicSideMenuDelegate.toggleLeft();
        }
        $scope.toggleRight=function () {
            $ionicSideMenuDelegate.toggleRight();
        }
    })

//search
app.controller('instantSearchCtrl',function($scope,$http){
    $http.get('js/menulist.json').success(function(data, status, headers, config) {
        $scope.items = data.data;
    }).error(function(data, status, headers, config) {
        console.log("No data found..");
    });
});

app.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };
});

//developers
app.controller('DeveloperCtrl',function($scope, $state, $ionicPopup, $http, $ionicModal) {
    $http.get("js/developers.json")
        .success(function (response)
        {
            $scope.developers = response;
        })
        .error(function(data) {
            alert("ERROR");
        });

    $scope.devlop= function(name) {
        var name=name.title;
        console.log(name);
        $ionicPopup.alert({
            template:'<h4>You have selected a developer. Press OK to continue</h4>',
            title:name,
            okType: 'button-assertive'
        }).then(function (password) {
            
        });
    }
});

//speakerdetails
app.controller('SpeakersCtrl', function($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/speakers.html', function(modal) {
        $scope.UserView = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal
        console.log('clock');
    })

    $scope.openModal = function() {
        $scope.modal.show()
    }

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
})




//geolocation
module.controller('GeoCtrl', function($cordovaGeolocation) {

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });


  var watchOptions = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
    function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
  });


  watch.clearWatch();
  // OR
  $cordovaGeolocation.clearWatch(watch)
    .then(function(result) {
      // success
      }, function (error) {
      // error
    });
});