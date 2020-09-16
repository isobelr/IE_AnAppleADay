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
exercise = 0;
diet = 0;
health = 0;
lifestyle = 0;
impregnability = 0;
hypertension = 0;
heart = 0;
copd = 0;


function q1(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
  if (arr[0] === '1') {
    exercise += 100;
    health += 14.28;
    lifestyle += 25;
    impregnability += 33.32;
    hypertension += 16.67;
    heart = 12.5;
  } else if (arr[0] === '2') {
    exercise += 75;
    health += 10.71;
    lifestyle += 18.75;
    impregnability += 24.99;
    hypertension +=12.5;
    heart += 9.375;
  } else if (arr[0] === '3') {
    exercise += 50;
    health += 7.14;
    lifestyle += 12.5;
    impregnability += 16.67;
    hypertension += 8.33;
    heart += 6.25;
  } else if (arr[0] === '4') {
    exercise += 25;
    health += 3.57;
    lifestyle += 6.25;
    impregnability += 8.33;
    hypertension += 4.16;
    heart += 3.125;
  }
}

function q2(el) {

  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);

  if (arr[1] === '1') {
    diet += 50;
    lifestyle += 25;
    impregnability += 33.3;
    hypertension += 16.66;
    heart += 12.5;
  } else if (arr[1] === '2') {
    diet += 37.5;
    lifestyle += 18.75;
    impregnability += 24.975;
    hypertension += 12.5;
    heart += 9.375;
  } else if (arr[1] === '3') {
    diet += 25;
    lifestyle += 12.5;
    impregnability += 16.65;
    hypertension += 8.33;
    heart += 6.25;
  } else if (arr[1] === '4') {
    diet += 12.5;
    lifestyle += 6.25;
    impregnability += 8.325;
    hypertension += 4.16;
    heart += 3.125;
  }
}

function q3(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
  if (arr[2] === '1') {
    health += 7.14;
    hypertension += 16.67;
    heart += 12.5;

  } else if (arr[2] === '2') {
    health += 14.28;
  }
}

function q4(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
  if (arr[3] === '1') {
    heart += 12.5;
    health += 7.14;
  } else if (arr[3] === '2') {
    health += 14.28;
  }
}

function q5(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
  if (arr[4] === '1') {
    hypertension +=  16.66;
    health += 7.14;
    copd += 50;
  } else if (arr[4] === '2') {
    health += 14.28;
  }
}

function q6(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
  if (arr[5] === '1') {
    hypertension += 16.66;
    health += 7.14;
  } else if (arr[5] === '2') {
    health += 14.28;
  }
}

function q7(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
  if (arr[6] === '1') {
    heart += 12.5;
    health += 7.14;
  } else if (arr[6] === '2') {
    health += 14.28;
  }
}

function q8(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
  if (arr[7] === '1') {
    lifestyle += 0;
    impregnability += 8.335;
    hypertension += 16.66;
    heart += 12.5;
    copd += 50;
  } else if (arr[7] === '2') {
    lifestyle += 6.25;
    impregnability += 16.67;
    hypertension += 12.5;
    heart += 9.375;
    copd += 37.5;
  } else if (arr[7] === '3') {
    lifestyle += 12.5;
    impregnability += 20;
    hypertension += 8.33;
    heart += 6.25;
    copd += 25;
  } else if (arr[7] === '4') {
    lifestyle += 25;
    impregnability += 33.34;
  }
}

function q9(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
  if (arr[8] === '1') {
    lifestyle += 25;
    diet += 40;
    heart += 3.125;
  } else if (arr[8] === '2') {
    lifestyle += 6.25;
    diet += 25;
    heart += 9.375;
  } else if (arr[8] === '3') {
    lifestyle += 3;
    diet += 12.5;
    heart += 12.5;
  } else if (arr[8] === '4') {
    lifestyle += 25;
    diet += 50;
  }
}

function q10(el) {
  var amount = el.getAttribute('value');
  arr.push(amount);

  console.log(arr);
  if (arr[6] === '1') {
    heart += 12.5;
    health += 7.14;
  } else if (arr[6] === '2') {
    health += 14.28;
  }
}

function displayVar(variable) {

  document.getElementById(variable).innerHTML = exercise;

  var marksCanvas = document.getElementById("marksChart");

  var marksData = {
    labels: ['Exercise', 'Diet', 'Health', 'Lifestyle', 'Impregnability'],
    datasets: [{
      label: "Your Health",
      backgroundColor: "rgba(0,200,200,0.2)",

      data: [exercise, diet, health, lifestyle, impregnability]
    }]
  };

  var radarChart = new Chart(marksCanvas, {
    type: 'radar',
    data: marksData,
    options: {
      scale: {
          ticks: {
            beginAtZero: true,
            max: 100,
            min: 0,
            stepSize: 25
          }
      }
    }
  });

  var riskCanvas = document.getElementById("barChart");
  

  var riskData = {
    labels: ['hypertension', 'heart failure', 'COPD'],
    datasets: [{
      label: "Your Risks",
      backgroundColor: ['cyan', 'orange', 'lightgreen'],

      data: [hypertension, heart, copd]
    }]
  };

  var barChart = new Chart(riskCanvas, {
    type: 'horizontalBar',
    data: riskData,
    options: {
      scales: {
        xAxes: [{
          ticks: {
            max: 100,
            min: 0
          }
        }]
      }
    }

  });

  // exercise = 0;
  // diet = 0;
  // health = 0;
  // lifestyle = 0;
  // impregnability = 0;
  // hypertension = 0;
  // heart = 0;
  // copd = 0;

}







