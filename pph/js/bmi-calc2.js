

function bmi() {
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
    var result = (weight / (height ** 2)) * 10000;


    if (result < 18.5) {
        document.getElementById("result").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">您的BMI分数是:  <br></h2>" + "<h2>" + Math.round(result) + "</h2>";
        document.getElementById("resultexplanation").innerHTML = "<br>您的BMI被归类为体重过轻<br>";

        var el = document.getElementById("resultpic");
        el.innerHTML = "<img src=\"images/result_underweight.svg\">";

    } else if (result < 25) {
        document.getElementById("result").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">您的BMI分数是:  <br></h2>" + "<h2>" + Math.round(result) + "</h2>";
        document.getElementById("resultexplanation").innerHTML = "<br>您的BMI被归类为正常<br>";
        var el = document.getElementById("resultpic");
        el.innerHTML = "<img src=\"images/result_normal.svg\">";
    } else if (result < 30) {
        document.getElementById("result").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">您的BMI分数是:  <br></h2>" + "<h2>" + Math.round(result) + "</h2>";
        document.getElementById("resultexplanation").innerHTML = "<br>您的BMI被归类为“超重”<br>";
        var el = document.getElementById("resultpic");
        el.innerHTML = "<img src=\"images/result_overweight.svg\">";
    } else if (result > 30) {
        document.getElementById("result").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">您的BMI分数是:  <br></h2>" + "<h2>" + Math.round(result) + "</h2>";
        document.getElementById("resultexplanation").innerHTML = "<br>您的BMI归类为肥胖<br>";
        var el = document.getElementById("resultpic");
        el.innerHTML = "<img src=\"images/result_obese.svg\">";
    } else {
        document.getElementById("resultexplanation").innerHTML = "<br><h2 class=\"mb\-\4\" data-aos=\"fade-up\">糟糕！请输入您的身高和体重，然后按提交。</h2>";
    }
}

