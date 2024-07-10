document.addEventListener("DOMContentLoaded", function () {
  const sofaImage = document.querySelector(".sofa-image")
  const button360 = document.querySelector(".button360")
  const buttonBack = document.querySelector(".buttonBack")

  function showGif() {
    sofaImage.src = "assets/sofagif.gif"
    button360.style.display = "none"
    buttonBack.style.display = "block"
  }

  function showStaticImage() {
    sofaImage.src = "assets/Sofa.svg"
    button360.style.display = "block"
    buttonBack.style.display = "none"
  }

  button360.addEventListener("click", showGif)
  buttonBack.addEventListener("click", showStaticImage)

  buttonBack.style.display = "none"
})
