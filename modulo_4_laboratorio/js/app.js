var getName =() => document.getElementById("input-name").value;
var getsurName1 =() => document.getElementById("input-surname1").value;
var getsurName2 =() => document.getElementById("input-surname2").value;
var getFullName = () => getName() + " " + getsurName1() + " " +  getsurName2();

var submitName =() => document.getElementById("full-name").innerHTML = getFullName();

document.getElementById("input-name").addEventListener("keyup", submitName);
document.getElementById("input-surname1").addEventListener("keyup", submitName);
document.getElementById("input-surname2").addEventListener("keyup", submitName);

document.getElementById("button-submit").addEventListener("click", submitName);

