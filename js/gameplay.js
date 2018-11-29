$(document).ready(function() {
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

  $('#makeMove').click(function() {
    console.log("MOVE")
    $(".current.player-card").animate({width: 400}, 300)
        .animate({width: 400}, 300)
        .animate({height: 300}, 400)
        .animate({left: 200}, 500)
        .animate({top: "+=100", borderWidth: 10}, "slow")
  })

  $('.player-card').on("mouseenter", function() {
    $(this).animate({width: 200}, 300)
  })
  $('.player-card').on("mouseleave", function() {
    $(this).animate({width: 150}, 300)
  })
});
