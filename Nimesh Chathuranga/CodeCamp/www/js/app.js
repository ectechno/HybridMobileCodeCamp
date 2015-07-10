var app=angular.module('starter', ['ionic'])
    .config(function($ionicConfigProvider)
    {if(ionic.Platform.isAndroid())$ionicConfigProvider.scrolling.jsScrolling(true);
    })
 //--------------------------------------Routing code--------------------------------------------
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Login')//Login Default

    $stateProvider
        .state('Home', {
            url: '/Home',
            //abstract: true,
            templateUrl: 'template/Home.html',
            controller:'MenuController'
    })
        //url to go login form
        .state('Login', {
        url: '/Login',
        templateUrl: 'template/Login.html',
        controller:'loginController'
    })

        //url to go gallery page
        .state('Gallery',{
            url:'/Gallery',
            templateUrl:'template/Gallery.html'
    })
        //url to go camera page
        .state('Camera',{
            url:'/Camera',
            templateUrl:'template/Camera.html'
    })
})
//--------------------
app.controller('mainInfoFactory', ['$scope', '$http', function($scope,$http) {
    $http.get("js/UserDetails.json")
        .success(function (response)
        {
            $scope.advices = response;
        })
        .error(function(data) {
            alert("ERROR");
        });
}]);

//-------------------------------------event detail load controller-----------------------------------
app.controller('EventController', ['$scope', '$http', function($scope,$http,$ionicPopup) {
    $http.get("js/Events.json")
        .success(function (response)
        {
            $scope.event = response;
        })
        .error(function(data) {
            alert("ERROR");
        });

    $scope.events= function(item) {
        var msg = item.evname;
        $ionicPopup.alert({
            title: msg
        }).then(function (password) {
            // You have the password now
        });
    }

}]);
//----------------------------------menu open code-----------------------------------------
  app.controller('MenuController',function($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft=function () {
            $ionicSideMenuDelegate.toggleLeft();
        }
        $scope.toggleRight=function () {
            $ionicSideMenuDelegate.toggleRight();
        }
    })
//------------------------------------model open code--------------------------------------------
app.controller('ModelController', function($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('template/UserView.html', function(modal) {
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
//----------------------------gallery controller-------------------------------------
var namei;
 app.controller('GalleryCtrl',function($scope, $state) {

          $scope.ename=function(name){
             namei=name.evname;
              if(namei != null){
                 $state.go('Gallery');
              }
              else{
                  namei='Gallery';
                  $state.go('Gallery');
              }

          }
         $scope.clear=function(met){
             if(met=='back'){
                 namei='';
                 console.log(namei);
             }
         if(met=='all'){
             console.log('all');
             $state.go('Gallery');
             $scope.myTitle ='All Event Gallery';
             $scope.album = [
                 'img/event/htbr.png',
                 'img/event/virtusa.jpg',
                 'img/event/idmart.jpg'
             ];

         }
         }
            $scope.myTitle = namei;
            if(namei=='Code Camp'){
                $scope.album = [
                    'img/event/htbr.png'
                ];
            }
             if(namei=='Inversion 15'){
                 $scope.album = [
                     'img/event/virtusa.jpg'
                 ];
             }
             if(namei=='Ideamart'){
                 $scope.album = [
                     'img/event/idmart.jpg'
                 ];
             }

        //$scope.initPhotoSwipe = function () {
        //    $window.Code.photoSwipe('a', '#Gallery');
        //
        //    //var myPhotoSwipe = Code.PhotoSwipe.attach( $window.document.querySelectorAll('#Gallery1 a'), { enableMouseWheel: false , enableKeyboard: false } );
        //}

        //$scope.initPhotoSwipe();

    });
//----------------------------search controller--------------------------------------------
app.controller('instantSearchCtrl',function($scope,$http){
    $http.get('js/data.json').success(function(data, status, headers, config) {
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

//-----------------------------speaker detail controller-----------------------------------
app.controller('SpeakerController',function($scope, $state, $ionicPopup, $http, $ionicModal) {
    $http.get("js/Developers.json")
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
            title:name
        }).then(function (password) {
            // You have the password now
        });
    }
});
//--------------------------login form controller code-------------------------------------------
app.controller('loginController', function($scope, $state, $ionicPopup) {

    $scope.signIn = function(user) {
        var pass = user.password;
        var un   = user.username;
        if (un=='admin' && pass=='admin123')  {
            //console.log('Sign-In', pass, un);
            $state.go('Home');
            //$state.closeModal();
        }
        else {
            console.log('error');
            $ionicPopup.alert({
                title: 'Enter your Correct UserName & Password'
            }).then(function (password) {
                // You have the password now
            });
        }
        //
    };
})
//----------------------------------------user detail view popup code-------------------------
app.controller('UserController', function($scope, $state, $ionicPopup) {
    $scope.puser= function(user) {
        var msg=user.evname;
        $ionicPopup.alert({
            title: '<img src="img/1.png" style="width:500px;">'
        }).then(function (password) {
            // You have the password now
        });
    }
})
//------------------------------camera controller--------------------------------------
app.controller("CameraController", function($scope, $cordovaCamera) {

        $scope.takePicture = function() {
            var options = {
                quality : 75,
                destinationType : Camera.DestinationType.DATA_URL,
                sourceType : Camera.PictureSourceType.CAMERA,
                allowEdit : true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.imgURI = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                // An error occured. Show a message to the user
            });
        }

    });
//----------------------------------------------------------------------------------------------------------
//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    if(window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
//    if(window.StatusBar) {
//      StatusBar.styleDefault();
//    }
//  });
//})
