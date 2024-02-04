const car = document.querySelector(".car");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".rigth");
const brake = document.querySelector(".break-image");
const accelerator = document.querySelector(".accelarator-image");
const video = document.querySelector(".video");

car.style.left = `${520}px`;
let increaseCounter = 520;
let increaseSpeed = 0.5;

function increaseRigth() {
  increaseCounter += 15;
  car.style.left = `${increaseCounter}px`;

  if (increaseCounter >= 700) {
    increaseCounter = 700;
    updatedValue = increaseCounter;
  }
}

function increaseLeft() {
  increaseCounter -= 15;
  car.style.left = `${increaseCounter}px`;

  if (increaseCounter <= 460) {
    increaseCounter = 460;
  }
}

function increaseCarSpeed() {
  increaseSpeed += 0.5;
  video.playbackRate = increaseSpeed;
  if (increaseSpeed >= 4) {
    increaseSpeed = 4;
  }
}

function decreaseSpeed() {
  increaseSpeed -= 0.5;
  video.playbackRate = increaseSpeed;
  if (increaseSpeed <= 0.5) {
    increaseSpeed = 0.5;
  }
}

brake.addEventListener("click", decreaseSpeed);
accelerator.addEventListener("click", increaseCarSpeed);
rightEl.addEventListener("click", increaseRigth);
leftEl.addEventListener("click", increaseLeft);
