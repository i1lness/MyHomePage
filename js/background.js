const images = ["0.jpeg", "1.jpeg", "2.jpg"];

const imagesRandomIndex = Math.floor(Math.random() * images.length);

const chosenImages = images[imagesRandomIndex];

const bgImage = document.querySelector("#background-image");

bgImage.src = `img/${chosenImages}`;
