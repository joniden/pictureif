$(document).ready(function () {
  //initialize swiper when document ready  
  var swiperH = new Swiper ('.swiper-container-h', {
    direction: 'horizontal',
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    //keyboardControl: true,
    //Possible to link to an image
    hashnav: true,
    //autoplay: 2500,
    autoplayDisableOnInteraction: true

  });   

 	var swiperV = new Swiper ('.swiper-container-v', {
  	// Optional parameters
  	direction: 'vertical',
    scrollbar: '.swiper-scrollbar',
  	loop: false,
    nextButton: '.swiper-button-down',
    prevButton: '.swiper-button-up',
    //hashnav: true,
    mousewheelControl: true,
    onSlideChangeEnd: function(i){

      if(i.isBeginning == false){       
        swiperH.lockSwipes();
      }else{
        swiperH.unlockSwipes();
      }
      
    }
  })

  //Fix for menu
  $('.fullpage,.swiper-container').height(window.innerHeight);


  /**
   * Pulldown
   * @param  {[type]} ){ var id [description]
   * @return {[type]}     [description]
   */
  $('.open-pulldown').click(function(){

    var id = $(this).attr('href');
    if($(id).hasClass('pulldown')){
      console.log('test');
      $(id).removeClass('pulldown');
    }else{
      $('#about,#contact').removeClass('pulldown');
      $(id).addClass('pulldown');
    }

    
  });

  var navbar = $('#navbar-collapse');
  var wrapper = $('.content-wrap');

  navbar.on('show.bs.collapse', function () {
    wrapper.addClass('show-menu');
  }).on('hide.bs.collapse', function () {
    wrapper.removeClass('show-menu');
  });

  $('.dropdown-menu a').click(function(){
    navbar.collapse('hide');
    wrapper.removeClass('show-menu');
  });



});