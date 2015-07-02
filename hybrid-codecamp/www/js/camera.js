;
(function () {

	function onCameraSuccess(imageData){
		$('#image-container').append('<img class="camera-append-image" width="230" src="data:image/jpeg;base64,'+imageData+'" />');
	}
	
	function onCameraFail(message){
		alert('Camera Failed because: ' + message);
	}
	
	function clearImage(){
		$('#image-container').empty();
	}

    function bind() {
        $(document).on('pageinit', '#home-page', function () {
            $(document).on('swipeleft swiperight', '#home-page', function (e) {
                if (!e.handled) {
                    if ($.mobile.activePage.jqmData('panel') !== 'open') {
                        if (e.type === 'swiperight') {
                            $('#left-panel').panel('open');
                            e.handled = true;
                        }
                    }
                }
                e.preventDefault();
            });
        });
		
		/*
		More options: http://plugins.cordova.io/#/package/org.apache.cordova.camera
		*/
		
		$('#camera-page').on('tap', '#capture-button', function (e) {
			if (!e.handled) {
				navigator.camera.getPicture(onCameraSuccess, onCameraFail, {
					quality: 50,
					destinationType: Camera.DestinationType.DATA_URL,
					allowEdit : true
				});
				e.handled = true;
			}
			e.preventDefault();
		});
		
		$('#camera-page').on('tap', '#capture-file-button', function (e) {
			if (!e.handled) {
				navigator.camera.getPicture(onCameraSuccess, onCameraFail, {
					quality: 50,
					destinationType: Camera.DestinationType.DATA_URL,
					sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
				});
				e.handled = true;
			}
			e.preventDefault();
		});
		
		$('#camera-page').on('tap', '#clear-button', function (e) {
			if (!e.handled) {
				clearImage();
				e.handled = true;
			}
			e.preventDefault();
		});
    }
	
    bind();	
})();