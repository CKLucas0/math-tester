function wacht(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const slider_lengte = document.getElementById("lengte");
const waarde_lengte = document.getElementById("waarde_lengte");

slider_lengte.oninput = function() {
  waarde_lengte.innerText = this.value;
}

const slider_tijd = document.getElementById("tijd");
const waarde_tijd = document.getElementById("waarde_tijd");

slider_tijd.oninput = function() {
  waarde_tijd.innerText = this.value;
}

const button = document.getElementById("start");
const getal = document.getElementById("getal")

let uitkomst = 0

button.addEventListener("click", async function() {
  uitkomst = 0
  for (let i = 0; i < slider_lengte.value; i++) {
    let nummer = randint(-10,10)
    uitkomst = uitkomst + nummer
    getal.innerText = nummer
    await wacht(slider_tijd.value*1000)
  }
})

const invoer_button = document.getElementById("invoer_button")
const invoer = document.getElementById("invoer")

invoer_button.addEventListener("click", async function() {
  let inp = invoer.value
  if (uitkomst == inp) {
    getal.innerText= "het is juist"
    invoer.value = ""
  } else{
    getal.innerText = `je hebt het fout het was: ${uitkomst}`
  }
  await wacht(2000)
  getal.innerText = 0
})