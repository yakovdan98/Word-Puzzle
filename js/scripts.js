//Business Logic
function addDashes() {
  console.log("adding dashes");
  const input = document.getElementById("input").value;
  const charArr = input.split("");
  const vowelArr = ["a", "i", "o", "e", "u"];
  console.log(charArr.join(","));
  for (let i = 0; i < charArr.length; i++) {
    if (vowelArr.includes(charArr[i])) {
      charArr[i] = "-";
    }
  }
  console.log(charArr.join(","));
  return charArr;
}


// UI Logic
function createOutput() {
  const charArr = addDashes();
  document.getElementById("output-field").innerText = charArr.join("");
}

window.addEventListener("load", function () {
  console.log("page loaded");
  this.document.getElementById("submit-button").addEventListener("click", createOutput);


});