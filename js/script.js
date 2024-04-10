
let seconds = 10
let minutes = 0
let hours = 0

printTime(hours, minutes, seconds);

const clock = setInterval(function () {
  if (seconds > 0) {
    seconds--;
    if(seconds===0){
        console.log("Buon anno")
        document.getElementById("coutdown").innerText = "BUON ANNO!!"
    }
  }
  // Stampa
  printTime(hours, minutes, seconds);
}, 1000);

/**
 * Description: funzione che stampa orario in pagina
 * @param {number} h
 * @param {number} m
 * @param {number} s
 */
function printTime(h, m, s) {
  // operatore ternario
  let sStr = s <= 9 ? "0" + s.toString() : s.toString();
  let hStr = h <= 9 ? "0" + h.toString() : h.toString();
  let mStr = m <= 9 ? "0" + m.toString() : m.toString();


  document.getElementById("second").innerText = sStr;
  document.getElementById("minute").innerText = mStr;
  document.getElementById("hour").innerText = hStr;
}