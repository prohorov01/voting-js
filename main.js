const smileys = ["😍", "😊", "😐", "😒", "😢"];
let counts = [0, 0, 0, 0, 0];

const containerSmiles = document.querySelector("#smiley-container");
const containerCount = document.querySelector("#counter-container");

smileys.forEach((smiley, i) => {
  const smileyDiv = document.createElement("div");
  smileyDiv.classList.add("smiley");
  smileyDiv.innerText = smiley;
  smileyDiv.addEventListener("click", () => {
    counts[i]++;
    updateCounts();
  });

  const countDiv = document.createElement("div");
  countDiv.classList.add("count");
  countDiv.innerText = counts[i];

  containerSmiles.appendChild(smileyDiv);
  containerCount.appendChild(countDiv);
});

function updateCounts() {
  const countElements = document.querySelectorAll(".count");
  countElements.forEach((element, i) => {
    element.innerText = counts[i];
  });
}
