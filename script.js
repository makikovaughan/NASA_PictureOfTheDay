"use strict";

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function () {
  let dateStr = dateBox.value;
  const key = "DEMO_KEY";

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${dateStr}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return "Error";
      }
    })
    .then((data) => showPicture(data))
    .catch((error) => console.log(error));
};

const showPicture = (json) => {
  if (json.media_type === "video") {
    imageBox.innerHTML = `<iframe src='${json.url}'></iframe><h1>${json.title}</h1><p>${json.explanation}</p>`;
  } else if (json.media_type === "image") {
    imageBox.innerHTML = `<img src='${json.url}'/><h1>${json.title}</h1><p>${json.explanation}</p>`;
  } else {
    imageBox.innerHTML = "Image not Available";
  }
};
