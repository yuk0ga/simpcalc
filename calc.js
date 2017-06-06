function addition(){
  var x = parseInt(document.getElementById("add1").value);
  var y = parseInt(document.getElementById("add2").value);
  var answer = x+y;
  document.getElementById("addans").value = answer;
}

function subtraction(){
  var x = parseInt(document.getElementById("sub1").value);
  var y = parseInt(document.getElementById("sub2").value);
  var answer = x-y;
  document.getElementById("subans").value = answer;
}

function multiplication(){
  var x = parseInt(document.getElementById("multi1").value);
  var y = parseInt(document.getElementById("multi2").value);
  var answer = x*y;
  document.getElementById("multians").value = answer;
}

function division(){
  var x = parseInt(document.getElementById("div1").value);
  var y = parseInt(document.getElementById("div2").value);
  var answer = x/y;
  document.getElementById("divans").value = answer;
}
