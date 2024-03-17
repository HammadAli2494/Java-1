document.getElementById("btn1").onclick = function () {
    alert("Hammad Ali")
    let statement = "alert('Hammad Ali')"
    document.getElementById("oStatement").innerHTML = statement;
    document.getElementById("rStatement").innerHTML = "Hammad Ali";
    document.getElementById("rStatement").style.textAlign="center"
}
document.getElementById("btn2").onclick = function () {
    alert(" Alert Number:34104-1010101-1")
    let statement = "alert('Alert Number:34104-1010101-1')"
    document.getElementById("oStatement").innerHTML = statement;
    document.getElementById("rStatement").innerHTML = "34104-1010101-1";
    document.getElementById("rStatement").style.textAlign="center"
}
document.getElementById("btn3").onclick = function () {
    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code> myVar </code> are legal. </li></ul>"
    document.getElementById("rStatement").innerHTML=html;
    document.getElementById("rStatement").style.textAlign="start"
    document.getElementById("oStatement").innerHTML="";
}
document.getElementById("btn4").onclick = function () {
   document.getElementById("rStatement").innerHTML="<h3>Examples of camelCase</h3><ul><code><li>user</li><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li></code></ul>"
   document.getElementById("rStatement").style.textAlign="start"
   document.getElementById("oStatement").innerHTML="";
}
document.getElementById("btn5").onclick=function(){
    let num1=12
    let num2=13
    let sum=num1+num2
    let statement="Let num1="+num1+"<br>Let num2="+num2+"<br>Sum=num1 + num2"
    document.getElementById("oStatement").innerHTML=statement;
    document.getElementById("rStatement").innerHTML=sum;
    document.getElementById("rStatement").style.textAlign="center"
}
document.getElementById("btn6").onclick=function(){
    let num1=25
    let num2=10
    let sum=num1-num2
    let statement="Let num1="+num1+"<br>Let num2="+num2+"<br>Sum=num1 - num2"
    document.getElementById("oStatement").innerHTML=statement;
    document.getElementById("rStatement").innerHTML=sum;
    document.getElementById("rStatement").style.textAlign="center"
}
document.getElementById("btn7").onclick=function(){
    let num1=10
    let num2=4
    let sum=num1*num2
    let statement="Let num1="+num1+"<br>Let num2="+num2+"<br>Sum=num1 * num2"
    document.getElementById("oStatement").innerHTML=statement;
    document.getElementById("rStatement").innerHTML=sum;
    document.getElementById("rStatement").style.textAlign="center"
}
document.getElementById("btn8").onclick=function(){
    let num1=256
    let num2=4
    let sum=num1/num2
    let statement="Let num1="+num1+"<br>Let num2="+num2+"<br>Sum=num1 / num2"
    document.getElementById("oStatement").innerHTML=statement;
    document.getElementById("rStatement").innerHTML=sum;
    document.getElementById("rStatement").style.textAlign="center"
}
document.getElementById("btn9").onclick=function(){
    let equation = 256 / 4 * 5 + 8 ** 3 - (2 + 4) + 2**12;
    let statement = "256 / 4 * 5 + 8 ** 3 - (2 + 4) + 2**12";

    document.getElementById("oStatement").innerHTML=statement;
    document.getElementById("rStatement").innerHTML=equation;
    document.getElementById("rStatement").style.textAlign="center"
}




//Clear Button
document.getElementById("clearStatement").onclick = function () {
    document.getElementById("oStatement").innerHTML = "";
}
document.getElementById("clearOutput").onclick = function () {
    document.getElementById("rStatement").innerHTML = "";
}