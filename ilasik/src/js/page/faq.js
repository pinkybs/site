define(function(require) {

	var $ = require('jquery');
	//console.debug($);
	require('plugin/jquery.easing.min.seajs')($);
    
	$(document).ready(function () {
		$('.nav a').eq(6).addClass('cur');
		var comm = require('common.sea');
		comm.ilasik.initLang();
		comm.ilasik.faqSlide();
	}); //end ready
});