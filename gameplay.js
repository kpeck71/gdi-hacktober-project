
function playGame() {
  let winner
    if (Math.floor(Math.random() * 2) == 0){
      winner = document.getElementsByClassName("dog-score")[0]
    } else {
      winner = document.getElementsByClassName("cat-score")[0]
    }
    let current_count = parseInt(winner.innerHTML) + 1
    winner.innerHTML = current_count

    if (current_count == 10) {
      alert("game over")
      document.getElementsByClassName("dog-score")[0].innerHTML = 0
      document.getElementsByClassName("cat-score")[0].innerHTML = 0
    }
}

//helloooo
