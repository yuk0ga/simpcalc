function addition(){
  var x = parseFloat(document.getElementById("add1").value);
  var y = parseFloat(document.getElementById("add2").value);
  var answer = x+y;
  document.getElementById("addans").value = answer;
}

function subtraction(){
  var x = parseFloat(document.getElementById("sub1").value);
  var y = parseFloat(document.getElementById("sub2").value);
  var answer = x-y;
  document.getElementById("subans").value = answer;
}

function multiplication(){
  var x = parseFloat(document.getElementById("multi1").value);
  var y = parseFloat(document.getElementById("multi2").value);
  var answer = x*y;
  document.getElementById("multians").value = answer;
}

function division(){
  var x = parseFloat(document.getElementById("div1").value);
  var y = parseFloat(document.getElementById("div2").value);
  var answer = x/y;
  document.getElementById("divans").value = answer;
}
