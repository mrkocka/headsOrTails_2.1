let button = document.getElementById("js-button");

button.addEventListener("click", loade);

function loade() {
  document.getElementById("js-no").classList.remove("visit");
  document.getElementById("js-yes").classList.remove("visit");
  document.getElementById("js-loade").classList.toggle("visit");
  console.log("Oké!");
  setTimeout(delet, 1500);
}
function delet() {
  document.getElementById("js-loade").classList.toggle("visit");
  console.log("delet");
  setTimeout(fate, 300);
}

function fate() {
  let random = Math.floor(Math.random() * 2);
  console.log(random);

  if (random === 0) {
    document.getElementById("js-no").classList.toggle("visit");
    console.log("NO");
  }

  if (random === 1) {
    document.getElementById("js-yes").classList.toggle("visit");
    console.log("YES");
  }
}
