const init = ()=>{
    $('.parallax').parallax();
    $('.tooltipped').tooltip({delay: 50});
    const $fstParalax = $($('.parallax')[0]);
    const paralaxFade = $('<div style="position: absolute;width:100%;height: 100%;z-index:1;background: rgba(255,255,255,0)"></div>');
    $fstParalax.prepend(paralaxFade);
    console.log($fstParalax);
    let defph=0;

    $(window).scroll(function(){
        var scrollPos = $(document).scrollTop() / ($('body').height()/2.4);
        console.log(scrollPos / 1000);
        paralaxFade.css('background',`rgba(64, 80, 126, ${scrollPos})`)
    });
};
$(document).on('pageload', init);
$(document).ready(init);