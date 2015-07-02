;
(function () {

    function bind() {
		$('#login-page').on('tap', '#login-button', function (e) {
            if (!e.handled) {
                var username = document.querySelector('#login-username').value,
                    password = document.querySelector('#login-password').value;
                if (username === 'admin' && password === 'pass@123') {
                    $.mobile.navigate('#home-page');
                } else {
                    $('#login-error-popup').popup('open');
                }
                e.handled = true;
            }
            e.preventDefault();
        });
	}

    bind();

})();