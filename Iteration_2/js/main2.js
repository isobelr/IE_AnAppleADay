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

var text1 = "您可能有患充血性心力衰竭（CHF）的风险。如何改善生活方式以此来改善您的状况: 戒烟。 吸烟是心脏病的主要危险因素，戒烟是最好的办法。有一个健康的饮食: 包括新鲜水果，蔬菜和全谷物。避免吃高脂肪和高钠的食品。控制饮酒量。严格控制血糖可以帮助降低患心脏病的风险。进行体育锻炼，定期运动并保持健康的体重。请浏览我们的症状说明网页去了解更多关于您的状况。请浏览我们的医生查找页面以查找医生。";

var text2 = "您可能有患高血压的风险。患有类似疾病的人也会患有高血压。您可以做什么: 吃健康饮食。多吃新鲜水果和蔬菜。多吃富含多种钾，纤维，蛋白质，低盐和饱和脂肪的食物。进行有规律的身体锻炼。我们建议您每天进行1小时的身体锻炼，例如散步和骑自行车。保持你的体重指数（BMI）。请勿吸烟：吸烟会导致血压升高，使您更容易罹患心脏病和中风。减少饮酒: 饮酒过多会增加血压。获得充足的睡眠: 长时间睡眠不足与心脏病，高血压和中风密切相关。请浏览我们的症状说明页面以了解有关您状况的更多信息。请浏览我们的医生查找页面以查找医生。"

var text3 = "您可能处于患有慢性阻塞性肺疾病（COPD）的危险。 慢性阻塞性肺疾病是指引起气流阻塞和呼吸相关问题的一系列疾病。它包括肺气肿和慢性支气管炎。您可以采取哪些措施来改善自己的病情: 戒烟。避免吸烟和吸入其他空气污染物。咨询医生以进行肺部康复。咳嗽和气喘可以服用医生开的药物进行治疗。请浏览我们的症状说明页面以了解有关您的状况的更多信息。请浏览我们的医生查找页面以查找医生。"

var text4 = "您身体状况良好！做得好 ！健康生活方式的关键包括: 1.健康饮食- 健康的饮食包括大量食用新鲜水果，蔬菜，全谷物和蛋白质。限制食用含饱和脂肪或高钠的食品。2.健康的身体锻炼-定期进行某种形式的身体锻炼。日常锻炼包括跑步，慢跑和骑自行车等锻炼。每天运动30分钟或确保每周至少运动四个小时。3.健康体重- 保持18-25的体重指数（BMI）以保持健康。保持身体状况对您的健康确实很重要。4.适度饮酒或不饮酒- 适度饮酒量为每天5至5毫升。一杯酒含14毫升酒精。尽可能减少饮酒量，甚至避免饮酒。继续浏览我们的症状说明页面以了解有关潜在的可预防性疾病的更多信息以及如何避免这些疾病。"

var text5 = "您的健康需要进步！健康生活方式的关键包括: 1.健康饮食- 健康的饮食包括大量食用新鲜水果，蔬菜，全谷物和蛋白质。限制食用含饱和脂肪或高钠的食品。2.健康的身体锻炼- 定期进行某种形式的身体锻炼。日常锻炼包括跑步，慢跑和骑自行车等锻炼。每天运动30分钟或确保每周至少运动四个小时。3.健康体重- 保持18-25的体重指数（BMI）以保持健康。保持身体状况对您的健康确实很重要。4.适度饮酒或不饮酒- 适度饮酒量为每天5至5毫升。一杯酒含14毫升酒精。尽可能减少饮酒量，甚至避免饮酒。继续浏览我们的症状说明页面以了解有关潜在的可预防性疾病的更多信息以及如何避免这些疾病。"

function displayVar(variable) {

  if (heart >= hypertension && heart >= copd && heart > 50) {
    document.getElementById(variable).innerHTML = text1;
  } else if (hypertension > heart && hypertension > copd && hypertension > 50) {
    document.getElementById(variable).innerHTML = text2;
  } else if (copd > heart && copd > hypertension && copd >= 50) {
    document.getElementById(variable).innerHTML = text3;
  } else if (lifestyle > 85) {
    document.getElementById(variable).innerHTML = text4;
  } else {
    document.getElementById(variable).innerHTML = text5;
  }

  var marksCanvas = document.getElementById("marksChart");

  var marksData = {
    labels: ['锻炼身体', '平衡膳食', '健康的', '生活方式', '不可渗透性'],
    datasets: [{
      label: "你的健康",
      backgroundColor: "#0c8195",

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
    labels: ['高血压', '心力衰竭', 'COPD'],
    datasets: [{
      label: ['高血压', '心力衰竭', 'COPD'],
      backgroundColor: ['cyan', 'orange', 'lightgreen'],

      data: [hypertension, heart, copd]
    }]
  };

  var barChart = new Chart(riskCanvas, {
    type: 'horizontalBar',
    data: {
      labels: ["您的风险"],
      datasets: [{
         label: "高血压",
         backgroundColor: "#0c8195",
         data: [hypertension],
      },{
         label: "心力衰竭",
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







