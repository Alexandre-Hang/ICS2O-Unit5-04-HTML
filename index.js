// JavaScript File
var age;
var day;
function museumPrice() {
  age = document.getElementById("age").value;
  day = document.getElementById("day").value;
  if ((day == "Tuesday" || day == "Thursday") || (age <= 12 || age >= 65))
  {
    alert ("You get discount");
  }
  else
  {
    alert ("Pay regular price");
  }
}