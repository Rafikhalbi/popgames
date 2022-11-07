const foto = document.querySelector(".foto");
const user = document.querySelector(".user")
document.querySelector(".hidde").style.display = "none";
let audio = new Audio('audio/pop.mp3');
let countNumbers = 0;
const countSuprice = 1000;

swal("Siapa Nama Anda?", {
  content: "input",
})

.then((value) => {
  user.innerHTML = value;
  document.querySelector(".hidde").style.display = "flex";
});

foto.addEventListener("mousedown", () => {
  countNumbers++;
  foto.setAttribute('src', 'images/image2.png');
  document.querySelector(".count").innerHTML = countNumbers;
  audio.play();
  if(countNumbers===countSuprice) {
    swal("ngga capek tuh tangan?😂")
  }
} )

foto.addEventListener("mouseup", () => {
  foto.setAttribute('src', 'images/image1.png');
} )

foto.addEventListener("touchstart", () => {
  foto.setAttribute('src', 'images/image2.png');
} )

foto.addEventListener("touchmove", () => {
  foto.setAttribute('src', 'images/foto1.png');
} )