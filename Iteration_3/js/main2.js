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
var exercise = 0;
var diet = 0 ;
var health ;
var lifestyle;
var impregnability;
var diabetes = 0;
var hypertension = 0;
var heart = 0;
var copd = 0;
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
var i11 = 0;
var i12 = 0;
var i13 = 0;
var i14 = 0;
var keyy = 0;


function q1(el) {
  i1++;
  if (i1 === 1) {
    var amount = el.getAttribute('value');
    el.style.background = '#f1c111';  
	  el.style.color = '#fff';
	  
    arr[0] = amount;

    console.log(arr);
    if (arr[0] === '1') {
      exercise = 100;
      lifestyle = 33.34;
      diabetes = -12.5;

    } else if (arr[0] === '2') {
      exercise = 75;
      lifestyle = 25;
      diabetes = -9.375;

    } else if (arr[0] === '3') {
      exercise = 50;
      lifestyle = 16.67;
      diabetes = 9.375;

    } else if (arr[0] === '4') {
      exercise = 25;
      lifestyle = 8.335;
      diabetes = 12.5;

    }
  }
  console.log(exercise, diet, lifestyle, diabetes);
}

function q2(el) {
  i2++;
  if (i2 === 1) {
    var amount = el.getAttribute('value');
    
    el.style.backgroundColor = '#057a8d';
	el.style.color = '#fff';
    arr[1] = amount;

    if (arr[1] === '1') {
      diet = 50;
      lifestyle += 33.34;
      diabetes -= 12.5;

    } else if (arr[1] === '2') {
      diet = 37.5;
      lifestyle += 25;
      diabetes -= 9.375;

    } else if (arr[1] === '3') {
      diet += 25;
      lifestyle += 16.67;
      diabetes += 9.375;

    } else if (arr[1] === '4') {
      diet += 12.5;
      lifestyle += 8.335;
      diabetes += 12.5;

    }
  }
  console.log(exercise, diet, lifestyle, diabetes);
}

function q3(el) {
  i3++;
  if (i3 === 1) {
    var amount = el.getAttribute('value');
    el.style.backgroundColor = '#f1c111';
	  el.style.color = '#fff';
    arr[2] = amount;

    if (arr[2] === '1') {
      diabetes += 12.5;

    } else if (arr[2] === '2') {
      diabetes += 0;
    }
  }
  console.log(exercise, diet, lifestyle, diabetes);
}

function q4(el) {
  i4++;
  if (i4 === 1) {
    var amount = el.getAttribute('value');
    el.style.backgroundColor = '#057a8d';
	  el.style.color = '#fff';

    arr[3] = amount;

    if (arr[3] === '1') {
      diabetes += 12.5;
    } else if (arr[3] === '2') {
      diabetes += 0;
    }
  }
  console.log(exercise, diet, lifestyle, diabetes);
}

function q5(el) {
  i5++;
  if (i5 === 1) {
    var amount = el.getAttribute('value');
    el.style.backgroundColor = '#f1c111';
	  el.style.color = '#fff';
	  
    arr[4] = amount;

    if (arr[4] === '1') {
      diabetes += 12.5;
    } else if (arr[4] === '2') {
      diabetes += 0;
    }
  }
  console.log(exercise, diet, lifestyle, diabetes);
}

function q6(el) {
  i6++;
  if (i6 === 1) {
    var amount = el.getAttribute('value');
    el.style.backgroundColor = '#057a8d';
	  el.style.color = '#fff';

    arr[5] = amount;
    if (arr[5] === '1') {
      diabetes += 12.5;
    } else if (arr[5] === '2') {
      diabetes += 0;
    }
  }
  console.log(exercise, diet, lifestyle, diabetes);
}

function q7(el) {
  i7++;
  if (i7 === 1) {
    var amount = el.getAttribute('value');
    el.style.backgroundColor = '#f1c111';
	  el.style.color = '#fff';

    arr[6] = amount;
    if (arr[6] === '1') {
      diabetes += 12.5;

    } else if (arr[6] === '2') {
      diabetes += 0;
    }
  }
  console.log(exercise, diet, lifestyle, diabetes);
}

function q8(el) {
  i8++;
  if (i8 === 1) {
    var amount = el.getAttribute('value');
    el.style.backgroundColor = '#057a8d';
    el.style.color = '#fff';
    arr[7] = amount;
    if (arr[7] === '1') {
      diabetes += 12.5;
    } else if (arr[7] === '2') {
      diabetes += 0;
    }
  }
  console.log(exercise, diet, lifestyle, diabetes);
}

// function q9(el) {
//   i9++;
//   if (i9 === 1) {
//     var amount = el.getAttribute('value');
//     el.style.backgroundColor = '#057a8d';
//     el.style.color = '#fff';
//     arr[9] = amount;
//     if (arr[9] === '1') {
//       heart += 12.5;
//       health += 7.14;
//     } else if (arr[9] === '2') {
//       health += 14.28;
//     }
//   }
//   console.log(exercise, health, diet, lifestyle, impregnability, hypertension, heart, copd);
// }


function q10(el) {
  i10++;
  if (i10 === 1) {
    var amount = el.getAttribute('value');
    el.style.backgroundColor = '#f1c111';
    el.style.color = '#fff';

    arr[8] = amount;
    if (arr[8] === '1') {
      lifestyle += 33.34;
      diet += 40;

    } else if (arr[8] === '2') {
      lifestyle += 25;
      diet += 25;

    } else if (arr[8] === '3') {
      lifestyle += 16.67;
      diet += 12.5;

    } else if (arr[8] === '4') {
      lifestyle += 8.335;
      diet += 50;
    }
  }
  
  console.log(exercise, diet, lifestyle, diabetes);
}

var text1 = "<br>You maybe at risk of Congestive heart failure (CHF). <br><strong>What lifestyle changes you can include to improve your condition:</strong> <br>1. Stop smoking: Smoking is a major risk factor for heart disease. Quitting is the best way. <br>2. Eat a healthy diet: Include fresh fruits, vegetables and whole grains. Avoid eating a high fat and high sodium diet. <br>3. Limit your alcohol intake. <br>4. Tight blood sugar control can help reduce the risk of heart disease. <br>5. Be physical active: have regular exercise and maintain a healthy weight. <br>Navigate to our Symptom Explainer page to learn more about your condition. Navigate to our Doctor Finder page to find a doctor.";

var text2 = "<br>You maybe at risk of hypertension. People who had similar conditions also suffered from Hypertension. <br><strong>What you could do:</strong> <br>1. Eat a Healthy Diet. Eat plenty of fresh fruits and vegetables. Have a variety of foods rich in potassium, fiber, protein and low in salt and saturated fat. <br>2. Have regular physical activity.Its recommend you engage in 1 hour of physical activity such as walking and bicycling everyday. Maintain your body mass index(BMI). <br> 3. Do not smoke: Smoking raises blood pressure and puts you at higher risk for heart attack and stroke. <br>4. Reduce Alcohol consumption: Drinking too much alcohol can raise your blood pressure. <br>5. Get enough sleep: Not getting enough sleep on a regular basis is linked to risk of heart disease, high blood pressure and stroke. <br>Navigate to our Condition Explainer page to learn more about your condition. Navigate to our Doctor Finder page to find a doctor."

var text3 = "<br>You maybe at risk of Chronic obstructive pulmonary disease(COPD). COPD refers to a group of diseases that cause airflow blockage and breathing-related problems. It includes emphysema and chronic bronchitis. <br><strong>What you can do to improve your condition:</strong> <br>1. Quit smoking. Avoid Tobacco Smoke and other air pollutants. <br>2. Visit a doctor for pulmonary rehabilitation. Coughing and wheezing can be treated with suitable medication prescribed by a doctor. <br>3. Navigate to our Condition Explainer page to learn more about your condition. Navigate to our Doctor Finder page to find a doctor."

var text4 = "<br>您身体状况良好！做得好 ！<br><strong>健康生活方式的关键包括:</strong> <br>1.健康饮食- 健康的饮食包括大量食用新鲜水果，蔬菜，全谷物和蛋白质。限制食用含饱和脂肪或高钠的食品。<br>2. 健康的身体锻炼- 定期进行某种形式的身体锻炼。日常锻炼包括跑步，慢跑和骑自行车等锻炼。每天运动30分钟或确保每周至少运动四个小时。<br>3. 适度饮酒或不饮酒- 适度饮酒量为每天5至25毫升。一杯酒含14毫升酒精。尽可能减少饮酒量，甚至避免饮酒。 "

var text5 = "<br>您的健康需要进步！ <br><strong>健康生活方式的关键包括:</strong> <br>1.健康饮食- 健康的饮食包括大量食用新鲜水果，蔬菜，全谷物和蛋白质。限制食用含饱和脂肪或高钠的食品。<br>2. 健康的身体锻炼- 定期进行某种形式的身体锻炼。日常锻炼包括跑步，慢跑和骑自行车等锻炼。每天运动30分钟或确保每周至少运动四个小时。<br>3. 适度饮酒或不饮酒- 适度饮酒量为每天5至25毫升。一杯酒含14毫升酒精。尽可能减少饮酒量，甚至避免饮酒。 "

var text6 = "<br> 完成测验，然后回到这里"





function displayVar(variable) {

    if (lifestyle >= 75) {
    document.getElementById(variable).innerHTML = text4;
  } else if (lifestyle <75 ) {
    document.getElementById(variable).innerHTML = text5;
  } else {
    document.getElementById(variable).innerHTML = text6;
  }
  
  var x = lifestyle;
  var y = exercise;
  var z = diet;

  if (i10 == 1) {

    var testCanvas = document.getElementById('test1');

    var data = [x, y, z];

    var div1 = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    var mainChart = new RadialProgressChart(testCanvas, {
      diameter: 120,
      series: [
        { labelStart: '\uF106', label: '饮食', value: z },
        { labelStart: '\uF101', label: '行使', value: y },
        { labelStart: '\uF105', label: '生活方式', value: x }
      ]
    }

    );

    d3.selectAll('g').on('mouseover', function (d, i) {
      var current = this;
      var others = d3.selectAll("g").filter(function (el) {
        return this != current
      });
      others.selectAll("g").style('opacity', '0.40');
      d3.select(this).style('opacity', '1');

      d3.select(this).transition()
        .duration('50')
        .attr('opacity', '.85');
      div1.transition()
        .duration(200)
        .style("opacity", .8)
        .style("visibility", "visible");



    })
      .on('mouseout', function (d, i) {
        var current = this;
        var others = d3.selectAll("g").filter(function (el) {
          return this != current
        });
        others.selectAll("g").style('opacity', '1');
        d3.select(this).style('opacity', '1');
        div1.transition()
          .duration(200)
          .style("opacity", .8)
          .style("visibility", "hidden")
      })
      .on("mousemove", function (d) {
        div1.html(d.label + ` 得分了 :` + Math.round(d.value))
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY) + "px");

      })



}

//   if (diabetes <= 33.34 && i10 ==1 || lifestyle >= 75) {
//     document.getElementById("resultexplanation2").innerHTML = "<br>You are at Low risk of Type 2 Diabetes<br>";
//     var el = document.getElementById("resultpic2");
//     el.innerHTML = "<img src=\"images/questionnaire-low-risk.svg\">";
//   } else if (diabetes < 75 && i10 == 1 && lifestyle < 75) {
//     document.getElementById("resultexplanation2").innerHTML = "<br>You are at Moderate risk of Type 2 Diabetes<br>";
//     var el = document.getElementById("resultpic2");
//     el.innerHTML = "<img src=\"images/questionnaire-medium-risk.svg\">";
//   } else if (diabetes >= 75 && i10 == 1 && lifestyle <75 ) {
//     document.getElementById("resultexplanation2").innerHTML = "<br>You are at High risk of Type 2 Diabetes<br>";
//     var el = document.getElementById("resultpic2");
//     el.innerHTML = "<img src=\"images/questionnaire-high-risk.svg\">";
//   } else {
//     document.getElementById("resultexplanation2").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">Oops! Please Finish the quiz and get back here.</h2>";
//   }

  if (diabetes <= 33.34 && i10 == 1 || lifestyle >= 75) {
    document.getElementById("resultexplanation2").innerHTML = "<br>您患2型糖尿病的风险较低<br>";
    var el = document.getElementById("resultpic2");
	 document.getElementById("hidden2").style.display = "block";

    var div = document.createElement('div');
    div.setAttribute('class', 'someClass');
    div.innerHTML = document.getElementById('lowrisk').innerHTML;
    document.getElementById('lowrisktarget').appendChild(div);

    el.innerHTML = "<img src=\"images/questionnaire-low-risk.svg\">";
  } else if (diabetes < 75 && i10 == 1 && lifestyle < 75) {
    document.getElementById("resultexplanation2").innerHTML = "<br>您处于2型糖尿病的中等风险<br>";
    var el = document.getElementById("resultpic2");
    el.innerHTML = "<img src=\"images/questionnaire-medium-risk.svg\">";
	  document.getElementById("hidden").style.display = "block";

    var div = document.createElement('div');
    div.setAttribute('class', 'someClass');
    div.innerHTML = document.getElementById('moderaterisk').innerHTML;
    document.getElementById('moderaterisktarget').appendChild(div);

  } else if (diabetes >= 75 && i10 == 1 && lifestyle < 75 ) {
    document.getElementById("resultexplanation2").innerHTML = "<br>您患有2型糖尿病的高风险<br>";
    var el = document.getElementById("resultpic2");
    el.innerHTML = "<img src=\"images/questionnaire-high-risk.svg\">";
	  document.getElementById("hidden").style.display = "block";

    var div = document.createElement('div');
    div.setAttribute('class', 'someClass');
    div.innerHTML = document.getElementById('highrisk').innerHTML;
    document.getElementById('highrisktarget').appendChild(div);

  } else {
    document.getElementById("resultexplanation2").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">注意！ 请完成测验，然后回到这里。</h2>";
  }



}















