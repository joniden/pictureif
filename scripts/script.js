$(document).ready(function () {
  //initialize swiper when document ready  
  var swiperH = new Swiper ('.swiper-container-h', {
    direction: 'horizontal',
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    keyboardControl: true,
    //Possible to link to an image
    hashnav: true,
    //autoplay: 2500,
    autoplayDisableOnInteraction: true

  });   

 	var swiperV = new Swiper ('.swiper-container-v', {
  	// Optional parameters
  	direction: 'vertical',
  	loop: false,
    mousewheelControl: true,
    mousewheelReleaseOnEdges: true,
  	onClick: function(i,e){
  		//i.slideNext();		
  	},
    onSlideChangeEnd: function(i){
      if(i.isBeginning == false){       
        swiperH.lockSwipes();
      }else{
        swiperH.unlockSwipes();
      }
      
    }
  })
});