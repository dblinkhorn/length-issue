// var string1 = "this should be the text of string1";
// var string2 = "this should be the text of string2";

// var i = 0;
// var speed = 20;

// function typeWriter(string, element) {
//   if (i < string.length) {
//     document.getElementById(element).innerHTML += string.charAt(i);
//     i++;
//     setTimeout(speed);
//   }
// }

// function getLength(string) {
//     console.log(string.length);
// }

// typeWriter(string1, "typewriterDiv1");
// // typeWriter(string2, "typewriterDiv2");

// getLength(string1);

var string1 = "this should be the text of string1";
var string2 = "this should be the text of string2";
var i = 0;
var j = 0;
var speed = 20;

function typeWriter1(string, element) {
  setTimeout(()=> {

  if (i < string.length) {
    document.getElementById(element).innerHTML += string.charAt(i);
    i++;
    typeWriter1(string, element)
  }
  }, 20)
}

function typeWriter2(string, element) {
    setTimeout(()=> {
  
    if (j < string.length) {
      document.getElementById(element).innerHTML += string.charAt(j);
      j++;
      typeWriter2(string, element)
    }
    }, 20)
  }


typeWriter1(string1, "typewriterDiv1");
typeWriter2(string2, "typewriterDiv2");