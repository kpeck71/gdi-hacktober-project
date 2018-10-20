function playGame() {
  (Math.floor(Math.random() * 2) == 0) ? document.findElementByClass("cat-score").value += 1 : document.findElementByClass("dog-score").value += 1;

}
