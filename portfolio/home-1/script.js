$(document).ready(function(){
	$('.menu-a').click(function(event){
		$('.menu-a, .menu, .lang').toggleClass('active');
		$('body').toggleClass('lock');
		$('.lang').detach().appendTo('.menu');
	});

	$('.menu li a').click(function(event) {
        $('.menu-a, .menu').removeClass('active');
        $('body').removeClass('lock');
    });

	$(window).resize(function () {
  		WindowWidth = $(window).width();
   		if (WindowWidth > 768){
      	$('.lang').detach().appendTo('.header-container');
   		}
  	});

  	$('.slider').slick({
  		dots:true,
  		speed:1000,
  		autoplay:true,
  		autoplaySpeed:4000,
  		pauseOnHover:false,
  		pauseOnFocus:true,
  		pauseOnDotsHover:false,
  		slidesToShow:1,
  		fade:false,
  		vertical:false,
  		swipe:true,
  		responsive: [
		    {
		      breakpoint: 1024, // - от какой ширины изменять настройки(1024 и ниже)
		      settings: {
		        // вносим изменения на ширине 1024 и ниже 
		        arrows:false,
		        appendDotsto: $('.slider-column1'),
		      }
		    },
		    {
		      breakpoint: 480, // брекпоинтов может быть сколько угодно
		      settings: {
		         arrows:false,
		         appendDotsto: $('.slider-column1'),
		         variableWidth: true,
		         swipe:true,
		         allowTouchMove: true,
		      }
		    }
		  ],
		appendDotsto: $('.slider-column1'),
  		
  	});

  	$('.slick-dots').detach().appendTo('.slider-column1');

  	$('.slider-big').slick({
  		arrows:false,
  	});

  	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
		$('header').addClass("sticky");
		}
		else{
		$('header').removeClass("sticky");
		}
	});

  	$("a.scrollto").click(function () {
	elementClick = jQuery(this).attr("href")
	destination = jQuery(elementClick).offset().top-70;
	$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
	return false;
	});

	$('.watch').click(function(event){
		$('.open-img').toggleClass('active');
		$('body').toggleClass('lock');
		
	});

	$('.exit-btn').click(function(event){
		$('.open-img').toggleClass('active');
		$('body').toggleClass('lock');
		$('.big-img').each(function(){
    		if($(this).hasClass('active')){
    			$(this).removeClass('active');
    		}
    	});
	});

	if ($(window).width() < 768) {
 		
 		$('.slider').on('click', '.watch', function() {
    		var ind = ($(this).parent().parent().parent().parent().index());
    		$('.big-img').each(function(){
    			if($(this).index() == (ind - 6) ){
    				$(this).toggleClass('active');
	    		}
	    	});
	    });
 
 	 }


	$('.slider').on('click', '.watch', function() {
    	var ind = ($(this).parent().parent().parent().parent().index());
    	$('.big-img').each(function(){
    		if($(this).index() == ind ){
    			$(this).toggleClass('active');
    		}
    	});
    });
	

});