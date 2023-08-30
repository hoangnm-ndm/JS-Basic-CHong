// # 2:
// var h1Element = document.getElementById("hello");

// var h1Element = document.getElementsByClassName("h1Class")[0];
// console.log(h1Element);
// var h1Element = document.getElementsByTagName("h1")[0];
// console.log(h1Element);

// var h1Element = document.querySelector("h1.h1Second");
// console.log(h1Element);

// var h1Element = document.querySelectorAll("h1");
// console.log(h1Element);

// var pElement = document.getElementById("infor");
// console.log(pElement);

// var, const, let

// # 2':
var btnElement = document.createElement("button");
btnElement.innerText = "Gửi đi!";
// var textNode = document.createTextNode("Send")
// btnElement.appendChild(textNode)
var bodyElement = document.getElementsByTagName("body")[0];
var button = document.getElementById("continue");
bodyElement.appendChild(btnElement);
// bodyElement.removeChild(button);

// # 3
button.style.backgroundColor = "red";
button.style.color = "white";
button.style.borderRadius = "8px";
button.style.margin = "10px";
// button.classList.
// -> ["class1", "class2", "class3"]
btnElement.classList.add("submit");
// -> ["class1", "class2", "class3", "submit"]
// classList.remove("submit");
// classList.toggle("submit")

// setAttribute
var aElement = document.getElementsByTagName("a")[0];
// aElement.href = "https://google.com";
aElement.setAttribute("href", "https://google.com");
console.log(aElement.getAttribute("href"));

//  # 4
// innerText, innerHTML
// getter, setter
var myFromElement = document.getElementById("myForm");
console.log(myFromElement.innerText);
console.log(myFromElement.innerHTML);

button.innerText = "to be continue!!!";

// # 5:
var btnChangeStyleElement = document.getElementById("changeStyle");

function changeStyle() {
  alert("Thay đổi phong cách trang web");
  bodyElement.classList.add("darkMode");
}

// btnChangeStyleElement.onclick = changeStyle;

btnChangeStyleElement.addEventListener("click", changeStyle);
