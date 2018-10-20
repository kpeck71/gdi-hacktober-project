function playGame() {
  (Math.floor(Math.random() * 2) == 0) ? parseInt(document.getElementsByClassName("cat-score")[0].innerHTML) += 1 : parseInt(document.getElementsByClassName("dog-score")[0].innerHTML) += 1;
}
