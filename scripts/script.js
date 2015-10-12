$(document).ready(function () {
    //initialize swiper when document ready  
    var swiperH = new Swiper ('.swiper-container-h', {
      	// Optional parameters
	    direction: 'horizontal',
	    loop: false,
	    nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        hashnav: true,
        //autoplay: 2500,
        autoplayDisableOnInteraction: true
    })   

 	var swiperV = new Swiper ('.swiper-container-v', {
      	// Optional parameters
      	direction: 'vertical',
      	loop: false,
      	onClick: function(i,e){
      		i.slideNext();
      		
      	}

    })

  });