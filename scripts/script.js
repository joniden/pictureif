$(document).ready(function () {
  //initialize swiper when document ready  
    var swiperH = new Swiper ('.swiper-container-h', {
      direction: 'horizontal',
      loop: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 'auto',
      //keyboardControl: true,
      //Possible to link to an image
      hashnav: true,
      //autoplay: 2500,
      autoplayDisableOnInteraction: true

      
    }); 

   	var swiperV = new Swiper ('.swiper-container-v', {
    	// Optional parameters
    	direction: 'vertical',
    	loop: false,
      nextButton: '.swiper-button-down',
      prevButton: '.swiper-button-up',
      slidesPerView: 'auto',
      //hashnav: true,
      mousewheelControl: true,
      mousewheelReleaseOnEdges: true,
      onSlideChangeEnd: function(i){

        i.update();

        if(i.isBeginning == false){       
          swiperH.lockSwipes();
        }else{
          swiperH.unlockSwipes();
          var l = swiperH.slides.length;

          //Push all of the slides up
          for(j=0;j<l;j++){
            var v = $('.swiper-container-v')[j].swiper;
            v.slidePrev(0);
          }
        }
        
      }
    });

  function onResize(){
    swiperH.update();
  }

  window.onresize = function(){
    if(typeof doit !== 'undefined'){
      clearTimeout(doit);
    }
    doit = setTimeout(onResize, 100);
  };


  $('a[data-slide-index]').on('click', function (e) {
    //e.preventDefault();

    var v = $('.swiper-container-v')[swiperH.activeIndex].swiper;

    if(v.activeIndex !== 0){
      v.slideTo(0);
    }

    if(v.activeIndex == 0){
      swiperH.update();
      swiperH.slideTo($(this).attr('data-slide-index'));
    }
     
  });

  //Fix for menu
  //$('.fullpage,.swiper-container').height(window.innerHeight);


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

  $('.page .content').click(function(e){
    e.stopPropagation();
  });

  $('.page').click(function(){
    $(this).removeClass('pulldown');
  });

  var navbar = $('#navbar-collapse');
  var wrapper = $('.content-wrap');

  navbar.on('show.bs.collapse', function () {
    wrapper.addClass('show-menu');
  }).on('hide.bs.collapse', function () {
    wrapper.removeClass('show-menu');
  });

  $('.dropdown > a').click(function(){
    $('#about,#contact').removeClass('pulldown');
  });

  $('.dropdown-menu a').click(function(){
    navbar.collapse('hide');
    $('#about,#contact').removeClass('pulldown');
    wrapper.removeClass('show-menu');
  });



});