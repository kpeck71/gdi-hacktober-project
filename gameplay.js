function playGame() {
  (Math.floor(Math.random() * 2) == 0) ? document.getElementByClass("cat-score").value += 1 : document.getElementByClass("dog-score").value += 1;

}
