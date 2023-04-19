const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/BC68BEB6-5DD5-4862-AAFF-75738A8DE991.jpeg") {
    myImage.setAttribute("src", "images/IMG-4974-positive.jpg");
  } else {
    myImage.setAttribute("src", "images/BC68BEB6-5DD5-4862-AAFF-75738A8DE991.jpeg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `I bet you think she is pretty cute, right ${storedName}?`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `I bet you think she is pretty cute, right ${storedName}?`;
}

myButton.onclick = function() {
  setUserName();
};

