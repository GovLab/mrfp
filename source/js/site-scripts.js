// console.log('trying jsonp');
// $.ajax({
//     type: "GET",
//     url: 'http://mrfpinc.org/feed/?_jsonp=?',
//     dataType: 'jsonp',
// }).success( function(response){
//     console.log(JSON.stringify(response));
// });

$(function() {

    $( '.m-collapsible' ).append( '<a class="b-button m-more"></a>' );

    $( '.m-more' ).click(function () {
        console.log('collapse clicked');
        $(this).parent().toggleClass('m-collapsed');
    });

});