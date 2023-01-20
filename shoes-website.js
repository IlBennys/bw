const cuore = document.getElementById("cuoricino")
console.log(cuore)
const heart = (event) => {
  if (cuore !== null) {
    cuore.classList.toggle("bianco")
    cuore.classList.toggle("rosso")
  } else if (cuore === null) {
    cuore.classList.toggle("rosso")
    cuore.classList.toggle("bianco")
  } else {
  }
}
const cuoreX = document.getElementById("cuoricinoX")
console.log(cuore)
const heartX = (event) => {
  if (cuore !== null) {
    cuoreX.classList.toggle("bianco")
    cuoreX.classList.toggle("rosso")
  } else if (cuoreX === null) {
    cuoreX.classList.toggle("rosso")
    cuoreX.classList.toggle("bianco")
  } else {
  }
}
