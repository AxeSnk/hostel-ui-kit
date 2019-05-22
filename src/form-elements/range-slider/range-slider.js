var jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("jquery-ui-dist/jquery-ui.js");

// $( function() {
//     $( "#slider-range" ).slider({
//         range: true,
//         min: 0,
//         max: 15000,
//         values: [ 5000, 10000 ],
//         slide: function( event, ui ) {
//         $( "#amount" ).val(ui.values[ 0 ] + "Р - " + ui.values[ 1 ] + "Р");
//         }
//     });
//     $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) + "Р" +
//     " - " + $( "#slider-range" ).slider( "values", 1 ) + "Р");
// } );
$( function() {
$("#slider").slider({
    min: 0,
    max: 15000,
    values: [5000,10000],
    range: true,
    slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] + "Р - " + ui.values[ 1 ] + "Р");
    }
});
    $( "#amount" ).val($( "#slider" ).slider( "values", 0 ) + "Р - " + $( "#slider" ).slider( "values", 1 ) + "Р");
});