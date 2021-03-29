var string1 = "this should be the text of string1";
var string2 = "this should be the text of string2";

var i = 0;
var speed = 20;

function typeWriter(string, element) {
  if (i < string.length) {
    document.getElementById(element).innerHTML += string.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function getLength(string) {
    console.log(string.length);
}

typeWriter(string1, "typewriterDiv1");
typeWriter(string2, "typewriterDiv2");

getLength(string1);
