(function(){
    $(document).trigger('pageload', this.href);

    if (!('pushState' in window.history)) return;

    var $appBody = $('body')
    var $appContainer = $('.app-container');

    function load(url) {
        console.log('Load', url);
        $appContainer.remove();

        $appContainer = $('<div class="app-container" />').appendTo($appBody);
        $appContainer.addClass('unloading');

        $appContainer.load(url + ' main', function() {
            $(document).trigger('pageload', this.href);
            $appBody.scrollTop(0);
        });
    }

    $appBody.on('click', 'a', function(event){
        var href = this.getAttribute('href');
        if (href.indexOf('#') == 0 || href.indexOf(':') >= 0) return;

        href = this.href;

        console.log('pushState', href);
        window.history.pushState({push:true}, '', href);

        load(href);
        event.preventDefault();
    });

    window.onpopstate = function(event) {
        console.log('Popstate', location.href);
        if (event.state && event.state.push) {
            load(location.href);
        }
    };

    window.history.replaceState({push:true}, '', location.href);

})()