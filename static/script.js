var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
  var x3 = x1 + x2;
  return x3;
}

console.log(SumNPrint(x, y));
console.log(SumNPrint(A, B));

if (C.length > z) {
  console.log(C);
} else if (C.length < z) {
  console.log(z);
} else {
  console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Banana") {
      alert("found the Banana in " + i);
    }
  }
}

findTheBanana(L1);
findTheBanana(L2);

L1.forEach((fruit) => {
  if (fruit === "Banana") {
    alert("We found a banana in the first array");
  }
});

L2.forEach((fruit) => {
  if (fruit === "Banana") {
    alert("We found a banana in the second array");
  }
});

function greetingFunc() {
  let d = new Date();
  let h = d.getHours();
  let message;
  if (h >= 5 && h < 12) {
    message = "Good morning";
  } else if (h >= 12 && h < 18) {
    message = "Good afternoon";
  } else if (h >= 18 && h < 20) {
    message = "Good evening";
  } else {
    message = "Good night";
  }
  document.getElementById("greeting").innerHTML =
    message + document.getElementById("greeting").innerHTML;
}

if (window.location.href.includes("index.html")) {
  greetingFunc();
}
