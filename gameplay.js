function playGame() {
  (Math.floor(Math.random() * 2) == 0) ? document.findElementById("cat-score").value += 1 : document.findElementById("dog-score").value += 1;

}
