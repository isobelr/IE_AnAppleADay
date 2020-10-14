

   function bmi () {
   var height = Number(document.getElementById("height").value);
   var weight = Number(document.getElementById("weight").value);
   var result = (weight / (height**2)) * 10000;
   // document.getElementById("result").innerHTML = "Your BMI score is <br>: " + result;


        if(result < 18.5){
         document.getElementById("result").innerHTML = "Your BMI score is:  <br>" + Math.round(result);
          document.getElementById("resultexplanation").innerHTML = "Your BMI is classified as Underweight";
        }else if (result < 25){
         document.getElementById("result").innerHTML = "Your BMI score is:  <br>" + Math.round(result);
          document.getElementById("resultexplanation").innerHTML = "Your BMI is classified as Normal";
        }else if (result < 30){
          document.getElementById("result").innerHTML = "Your BMI score is:  <br>" + result;
          document.getElementById("resultexplanation").innerHTML = "Your BMI is classified as Overweight";
        }else if (result > 30){
          document.getElementById("result").innerHTML = "Your BMI score is:  <br>" + result;
          document.getElementById("resultexplanation").innerHTML = "Your BMI is classified as Obese";
        }else{
          document.getElementById("resultexplanation").innerHTML = "Oops! Please enter your height and weight and then press submit.";
        }



   }


