/////////////////////////////////////
const life = document.querySelector(".hitPoints");
const stats = document.querySelector(".statsContainer");

let hitPointsValue = 100;

function attack() {
  hitPointsValue -= Math.floor(Math.random() * 10);
  life.innerHTML = hitPointsValue;
  let createPara = document.createElement("p");
  let result = stats.appendChild(createPara);
  result.innerHTML = `<p>Your previous damage: ${Math.floor(Math.random() * 50)}</p>`;
  if (hitPointsValue < 0) {
    alert("You win! The game will automatically reload");
    window.location.reload(true);
  }
}

function heal() {
  let randomNumber = Math.floor(Math.random() * 10);
  if (hitPointsValue >= 100) (hitPointsValue = 100), (randomNumber = 0);
  hitPointsValue += randomNumber;
  life.innerHTML = hitPointsValue;
}

function nextRound() {
  window.location.reload(true);
}
