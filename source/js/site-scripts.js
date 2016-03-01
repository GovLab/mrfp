$(function() {
    var mobileOnly = '(max-width: 767px)';

    $( '.m-collapsible' ).append( '<a class="b-button m-more"></a>' );

    $( '.m-more' ).click(function () {
        $(this).parent().toggleClass('m-collapsed');
    });


    function fixEqualizer () {
        if (window.matchMedia(mobileOnly).matches) {
            console.log('Matching Mobile JS');
            $( '.fix-equalizer' ).addClass('_fix-eq-mq');
        } else {
            console.log('Matching Desktop JS');
            $( '.fix-equalizer' ).removeClass('_fix-eq-mq');
        }
    }

    // don't use resize, because it gets super weird in mobile and keeps popping the event for some reason
    // shouldn't be necessary
    // $( window ).resize(function() {
    //     fixEqualizer();
    // });
    fixEqualizer();

    // on mobile, anchor to section content when using menu
    if (window.matchMedia(mobileOnly).matches) {
        $( '.js-mobile-anchor' ).each(function() {
            var h = $( this ).attr('href');
            $( this ).attr('href', h + '#content');
        });
    }
});