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

        $(document).on('swipeleft swiperight', '#home-page', function (e) {
            if (!e.handled) {
                if ($.mobile.activePage.jqmData('panel') !== 'open') {
                    if (e.type === 'swiperight') {
                        $('#left-panel').panel('open');
                        e.handled = true;
                    } else if (e.type === 'swipeleft') {
                        $.mobile.navigate('#camera-page', {
                            transition: 'flip'
                        });
                    }
                }
            }
            e.preventDefault();
        });

        $(document).on('swiperight', '#camera-page', function (e) {
            if (!e.handled) {
                $.mobile.navigate('#home-page', {
                    transition: 'flip'
                });
            }
            e.preventDefault();
        });

        $('#home-page').on('tap', '#open-list-items-button', function (e) {
            if (!e.handled) {
                $('#left-panel').panel('open');
                e.handled = true;
            }
            e.preventDefault();
        });

        $('#home-page').on('tap', '.dev-list-item', function (e) {
            if (!e.handled) {
                $('#developer-selected-popup').popup('open');
                e.handled = true;
            }
            e.preventDefault();
        });
    }

    bind();

})();