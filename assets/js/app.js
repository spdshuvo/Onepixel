$(function(){
    'use strict';
    //banner slick slider plugin
    $(".banner_slider").slick()
    //filterizer plugin
    $('.filterizer-container').filterizr()
    //magnific-popup
    $(".popup-youtube").magnificPopup({
        disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
    })
    $('#bar1').barfiller({
        barColor:'#000000',
    });
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
    $('#bar5').barfiller();
})