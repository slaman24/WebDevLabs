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

// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "Banana") {
//       alert("found the Banana in " + i);
//     }
//   }
// }

// findTheBanana(L1);
// findTheBanana(L2);

// L1.forEach((fruit) => {
//   if (fruit === "Banana") {
//     alert("We found a banana in the first array");
//   }
// });

// L2.forEach((fruit) => {
//   if (fruit === "Banana") {
//     alert("We found a banana in the second array");
//   }
// });

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

function addYear() {
  var year = new Date().getFullYear();
  document.getElementById("copyYear").innerHTML =
    document.getElementById("copyYear").innerHTML + " " + year;
}

// function showList() {
//   document.getElementById("activityList").style.display = "block";
//   document.getElementById("getMoreBtn").style.display = "none";
// }

$("#readMoreBtn").click(function () {
  $("#readMoreBtn").hide();
  $("#longIntro").show();
  $("#readLessBtn").show();
});

$("#readLessBtn").click(function () {
  $("#readLessBtn").hide();
  $("#longIntro").hide();
  $("#readMoreBtn").show();
});

function checkValidation() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  if (
    !name.checkValidity() ||
    !email.checkValidity() ||
    !message.checkValidity()
  ) {
    document.getElementById("validationMsg").style.display = "block";
  }
}

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was no ok");
      }
      return response.json();
    })
    .then((data) => {
      const advice = data.slip.advice;
      document.getElementById("adviceText").innerText = advice;
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
      document.getElementById("adviceText").innerText =
        "Failed to load advice. Please try again!";
    });
}
