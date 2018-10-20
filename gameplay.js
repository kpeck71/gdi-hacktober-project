<<<<<<< HEAD

function playGame() {
  let winner
    if (Math.floor(Math.random() * 2) == 0){
      winner = document.getElementsByClassName("dog-score")[0]
    } else {
      winner = document.getElementsByClassName("cat-score")[0]
    }
    let current_count = parseInt(winner.innerHTML) + 1
    winner.innerHTML = current_count
=======
function playGame() {
  (Math.floor(Math.random() * 2) == 0) ? parseInt(document.getElementsByClassName("cat-score")[0].innerHTML) += 1 : parseInt(document.getElementsByClassName("dog-score")[0].innerHTML) += 1;
>>>>>>> 1b44815accd6fccf51bfaa98b57fe557a4a00758
}
