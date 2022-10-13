const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const imagesRandomIndex = Math.floor(Math.random() * images.length);

const chosenImages = images[imagesRandomIndex];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
