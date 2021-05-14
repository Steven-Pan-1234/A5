document.getElementById('calculate').addEventListener('click', cc)
let diameter = 0
let a1 = 0
let a2 = 0
let r = 0
function cc () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  a1 = Math.PI * diameter
  document.getElementById('answer').innerHTML = a1
}
document.getElementById('calculate').addEventListener("click", area)
function area () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  r = diameter / 2
  r = parseInt(r)
  a2 = r * r * Math.PI
  document.getElementById('answer2').innerHTML = a2
}
document.getElementById('reset').addEventListener('click', reset)
function reset () {
  document.getElementById('input').value = ''
  document.getElementById('answer').innerHTML = ''
  document.getElementById('answer2').innerHTML = ''
}
