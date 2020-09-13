jQuery(document).ready(function($) {

	'use strict';

      var owl = $("#owl-testimonials");

        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });


        var top_header = $('.parallax-content');
        top_header.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });


        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })



        $(".pop-button").click(function () {
            $(".pop").fadeIn(300);
            
        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });
  


});

var arr = [];
exercise = '0';
diet = 0;
health = 0;
lifestyle = 0;
impregnability = 0;

function storeVar(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
}

if (arr[0] === '1') {
  exercise = '100';
  health = 25;
  lifestyle = 25;
  impregnability = 25;
} else if (arr[1] === '2') {
  exercise = '75';
  health = 15;
  lifestyle = 15;
  impregnability = 15;
} else if (arr[1] === '3') {
  exercise = '50';
  health = 10;
  lifestyle = 10;
  impregnability = 10;
} else if (arr[1] === '4') {
  exercise = '0';
  health = 10;
  lifestyle = 10;
  impregnability = 10;
}



function displayVar(variable) {
  if (arr[0] === '1') {
    exercise = '100';
    health = 25;
    lifestyle = 25;
    impregnability = 25;
  } else if (arr[1] === '2') {
    exercise = '75';
    health = 15;
    lifestyle = 15;
    impregnability = 15;
  } else if (arr[1] === '3') {
    exercise = '50';
    health = 10;
    lifestyle = 10;
    impregnability = 10;
  } else if (arr[1] === '4') {
    exercise = '0';
    health = 10;
    lifestyle = 10;
    impregnability = 10;
  }
  document.getElementById(variable).innerHTML = exercise;
  console.log(exercise)
}





