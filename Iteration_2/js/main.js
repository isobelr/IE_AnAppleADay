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
var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;
var i6 = 0;
var i7 = 0;
var i8 = 0;
var i9 = 0;
var i10 = 0;


function q1(el) {
  i1++;
  if (i1 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.background = '#56a5eb';
    
    console.log(arr);
    if (arr[0] === '1') {
      exercise += 100;
      health += 14.28;
      lifestyle += 25;
      impregnability += 33.32;
      hypertension += 4.16;
      heart += 3.125;
    } else if (arr[0] === '2') {
      exercise += 75;
      health += 10.71;
      lifestyle += 18.75;
      impregnability += 24.99;
      hypertension += 8.33;
      heart += 6.25;
    } else if (arr[0] === '3') {
      exercise += 50;
      health += 7.14;
      lifestyle += 12.5;
      impregnability += 16.67;
      hypertension += 12.5;
      heart += 9.375;
    } else if (arr[0] === '4') {
      exercise += 25;
      health += 3.57;
      lifestyle += 6.25;
      impregnability += 8.33;
      hypertension += 16.67;
      heart = 12.5;
      
    }
  }
  
}

function q2(el) {
  i2++;
  if (i2 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.backgroundColor = '#56a5eb';

    if (arr[1] === '1') {
      diet += 50;
      lifestyle += 25;
      impregnability += 33.3;
      hypertension += 4.16;
      heart += 3.125;
    } else if (arr[1] === '2') {
      diet += 37.5;
      lifestyle += 18.75;
      impregnability += 24.975;
      hypertension += 8.33;
      heart += 6.25;
    } else if (arr[1] === '3') {
      diet += 25;
      lifestyle += 12.5;
      impregnability += 16.65;
      hypertension += 12.5;
      heart += 9.375;
    } else if (arr[1] === '4') {
      diet += 12.5;
      lifestyle += 6.25;
      impregnability += 8.325;
      hypertension += 16.66;
      heart += 12.5;
    }
  }
}

function q3(el) {
  i3++;
  if (i3 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.backgroundColor = '#56a5eb';
    if (arr[2] === '1') {
      health += 7.14;
      hypertension += 16.67;
      heart += 12.5;

    } else if (arr[2] === '2') {
      health += 14.28;
    }
  }
}

function q4(el) {
  i4++;
  if (i4 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.backgroundColor = '#56a5eb';
    if (arr[3] === '1') {
      heart += 12.5;
      health += 7.14;
    } else if (arr[3] === '2') {
      health += 14.28;
    }
  }
}

function q5(el) {
  i5++;
  if (i5 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.backgroundColor = '#56a5eb';
    if (arr[4] === '1') {
      hypertension +=  16.66;
      health += 7.14;
      copd += 50;
    } else if (arr[4] === '2') {
      health += 14.28;
    }
  }
}

function q6(el) {
  i6++;
  if (i6 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.backgroundColor = '#56a5eb';
    if (arr[5] === '1') {
      hypertension += 16.66;
      health += 7.14;
    } else if (arr[5] === '2') {
      health += 14.28;
    }
  }
}

function q7(el) {
  i7++;
  if (i7 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.backgroundColor = '#56a5eb';
    if (arr[6] === '1') {
      heart += 12.5;
      health += 7.14;
    } else if (arr[6] === '2') {
      health += 14.28;
    }
  }
}

function q8(el) {
  i8++;
  if (i8 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.backgroundColor = '#56a5eb';
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
}

function q9(el) {
  i9++;
  if (i9 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.backgroundColor = '#56a5eb';
    if (arr[8] === '1') {
      lifestyle += 25;
      diet += 40;
      // heart += 3.125;
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
}

function q10(el) {
  i10++;
  if (i10 === 1) {
    var amount = el.getAttribute('value');
    arr.push(amount);
    el.style.backgroundColor = '#56a5eb';
    if (arr[6] === '1') {
      heart += 12.5;
      health += 7.14;
    } else if (arr[6] === '2') {
      health += 14.28;
    }
  }
}

var text1 = "You maybe at risk of Congestive heart failure (CHF). What lifestyle changes you can include to improve your condition: Stop smoking. Smoking is a major risk factor for heart disease.Quitting is the best way. Eat a healthy diet: Include fresh fruits, vegetables and whole grains. Avoid eating a high fat and high sodium diet. Limit your alcohol intake. Tight blood sugar control can help reduce the risk of heart disease. Be physical active, have regular exercise and maintain a healthy weight. Navigate to our Symptom Explainer Page to learn more about your condition. Navigate to our Doctor Finder page to find a doctor.";

var text2 = "You maybe at risk of hypertension. People who had similar conditions also suffered from Hypertension. What you could do: Eat a Healthy Diet. Eat plenty of fresh fruits and vegetables. Have a variety of foods rich in potassium, fiber, protein and low in salt and saturated fat. Have regular physical activity.Its recommend you engage in 1 hour of physical activity such as walking and bicycling everyday.Maintain your body mass index(BMI). Do not smoke: Smoking raises blood pressure and puts you at higher risk for heart attack and stroke. Reduce Alcohol consumption: Drinking too much alcohol can raise your blood pressure. Get enough sleep: Not getting enough sleep on a regular basis is linked to risk of heart disease, high blood pressure and stroke. Navigate to our Symptom Explainer Page to learn more about your condition. Navigate to our Doctor Finder page to find a doctor."

var text3 = "You maybe at risk of Chronic obstructive pulmonary disease(COPD). COPD refers to a group of diseases that cause airflow blockage and breathing-related problems. It includes emphysema and chronic bronchitis. What you can do to improve your condition: Quit smoking. Avoid Tobacco Smoke and other air pollutants. Visit a doctor for pulmonary rehabilitation. Coughing and wheezing can be treated with suitable medication prescribed by a doctor. Navigate to our Symptom Explainer Page to learn more about your condition. Navigate to our Doctor Finder page to find a doctor."

var text4 = "You are in good shape ! Great work ! The key to a healthy lifestyle includes: 1. Healthy Diet - A healthy diet includes good consumption of fresh fruits, vegetables, whole grains and proteins.Restrict consumption of foods with saturated fats or high sodium to as minimum as possible. 2. Healthy Physical Activity - Regularly engage in some form of physical activity.Include exercises such as running, jogging and cycling as part of your daily routine.Exercise 30 minutes everyday or make sure you have at least four hours of physical exercise every week. 3. Healthy Body weight - Maintain a Body mass index(BMI) of 18 - 25 to stay healthy.Staying fit is really important to your health. 4. Moderate or no Alcohol intake - Moderate alcohol consumption is measured to be between 5 to 5 grams per day.One drink contains 14 grams of alcohol.Reduce the amount of alcohol consumption to occasional or even avoid consumption if possible. Continue to our Symptom Explainer Page to learn more about potential preventable diseases and what you can do to avoid them."

var text5 = "Your health needs more work ! The key to a healthy lifestyle includes: 1. Healthy Diet - A healthy diet includes good consumption of fresh fruits, vegetables, whole grains and proteins.Restrict consumption of foods with saturated fats or high sodium to as minimum as possible. 2. Healthy Physical Activity - Regularly engage in some form of physical activity.Include exercises such as running, jogging and cycling as part of your daily routine.Exercise 30 minutes everyday or make sure you have at least four hours of physical exercise every week. 3. Healthy Body weight - Maintain a Body mass index(BMI) of 18 - 25 to stay healthy.Staying fit is really important to your health. 4. Moderate or no Alcohol intake - Moderate alcohol consumption is measured to be between 5 to 5 grams per day.One drink contains 14 grams of alcohol.Reduce the amount of alcohol consumption to occasional or even avoid consumption if possible. Continue to our Symptom Explainer Page to learn more about potential preventable diseases and what you can do to avoid them."

function displayVar(variable) {

  if (heart >= hypertension && heart >= copd && heart >= 50) {
    document.getElementById(variable).innerHTML = text1;
  } else if (hypertension > heart && hypertension > copd && hypertension >= 50 ) {
    document.getElementById(variable).innerHTML = text2;
  } else if (copd > heart && copd > hypertension && copd > COPD >= 50) {
    document.getElementById(variable).innerHTML = text3;
  } else if (lifestyle > 85) {
    document.getElementById(variable).innerHTML = text4;
  } else {
    document.getElementById(variable).innerHTML = text5;
  }

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
       data: {
      labels: ["Your Risks"],
      datasets: [{
         label: "Hypertension",
         backgroundColor: "#0c8195",
         data: [hypertension],
      },{
         label: "Heart Failure",
         backgroundColor: "#f89624",
         data: [heart],
      },{
         label: "COPD",
         backgroundColor: "#33c1cf",
         data: [copd],
      }]
   },
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







