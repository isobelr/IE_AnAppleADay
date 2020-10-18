

   function bmi () {
   var height = Number(document.getElementById("height").value);
   var weight = Number(document.getElementById("weight").value);
   var result = (weight / (height**2)) * 10000;


        if(result < 18.5){
         document.getElementById("result").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">Your BMI score is:  <br></h2>" + Math.round(result);
          document.getElementById("resultexplanation").innerHTML = "<br>Your BMI is classified as Underweight<br>";
          
          var el = document.getElementById("resultpic");
          el.innerHTML="<img src=\"images/result_underweight.svg\">";

        }else if (result < 25){
         document.getElementById("result").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">Your BMI score is:  <br></h2>" + Math.round(result);
          document.getElementById("resultexplanation").innerHTML = "<br>Your BMI is classified as Normal<br>";
          var el = document.getElementById("resultpic");
          el.innerHTML="<img src=\"images/result_normal.svg\">";
        }else if (result < 30){
          document.getElementById("result").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">Your BMI score is:  <br></h2>" + Math.round(result);
          document.getElementById("resultexplanation").innerHTML = "<br>Your BMI is classified as Overweight<br>";
          var el = document.getElementById("resultpic");
          el.innerHTML="<img src=\"images/result_overweight.svg\">";
        }else if (result > 30){
          document.getElementById("result").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">Your BMI score is:  <br></h2>" + Math.round(result);
          document.getElementById("resultexplanation").innerHTML = "<br>Your BMI is classified as Obese<br>";
          var el = document.getElementById("resultpic");
          el.innerHTML="<img src=\"images/result_obese.svg\">";
        }else{
          document.getElementById("resultexplanation").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">Oops! Please enter your height and weight and then press submit.</h2>";
        }
   }

