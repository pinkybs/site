define(function(require) {

	var $ = require('jquery');
	//console.debug($);
	require('plugin/jquery.nivo.slider.seajs')($);
    
	$(document).ready(function () {
		$('.nav a').eq(0).addClass('cur');

		$('.mainSlide').nivoSlider({
		  effect:'boxRainReverse',
		  pauseTime:4000,
		  directionNav:false,
		  controlNav:false
		});
	
	
		//var a = require('common.sea');
		//a.ilasik.test();
		//console.debug(a);
	}); //end ready
});