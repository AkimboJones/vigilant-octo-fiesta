const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/BC68BEB6-5DD5-4862-AAFF-75738A8DE991.jpeg") {
    myImage.setAttribute("src", "images/IMG-4974-positive.jpg");
  } else {
    myImage.setAttribute("src", "images/BC68BEB6-5DD5-4862-AAFF-75738A8DE991.jpeg");
  }
};