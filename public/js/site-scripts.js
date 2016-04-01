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

    // show/hide functionality for q&a section

    // toggle visibility on scroll to each element

    // var scrollPoints, wy, wh;

    // function showNode($elem) {
    //     $elem.addClass('m-active');
    //     $elem.next('dd').addClass('m-active');
    // }

    // function hideNode($elem) {
    //     $elem.removeClass('m-active');
    //     $elem.next('dd').removeClass('m-active');
    // }

    function toggleNode($elem) {
        $elem.toggleClass('m-active');
        $elem.next('dd').toggleClass('m-active');
    }

    // function getScrollPoints() {
    //     scrollPoints = {};
    //     $('#rfi-qa dt').each(function (e) {
    //         var y = $(this).offset().top;
    //         var y2 = y+$(this).height()+$(this).next('dd').height();
    //         var $this = $(this);
    //         scrollPoints[y] = { elem : $this , end : y2 };
    //     });
    // }

    // getScrollPoints();

    // $(window).scroll(function (e) {
    //     e.preventDefault();
    //     wy = window.scrollY;
    //     wh = $(window).height();
    //     offsetScroll = wh*0.5; // offset scroll trigger position
    //     for (var i in scrollPoints) {
    //         if (wy+offsetScroll >= i && wy+offsetScroll < scrollPoints[i].end) {
    //             showNode(scrollPoints[i].elem);
    //             hideNode($('dt').not(scrollPoints[i].elem));
    //             getScrollPoints();
    //             return;
    //         }
    //     }
    // });

    // toggle visibility on click

    $('#rfi-qa dt').click(function (e) {
        toggleNode($(this));

        // redo scrollpoints
        // getScrollPoints();
    });


});