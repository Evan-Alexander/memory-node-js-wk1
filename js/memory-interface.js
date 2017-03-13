var cardMatches = [];

$(document).ready(function(){
  $('.faceDown').click(function(event) {
    event.preventDefault();

    $(this).addClass("faceUp");
    $(this).removeClass("faceDown");

    if ($(this).hasClass("faceUp")) {
      cardMatches.push($(this).attr("class").split(" "));
    }

    if (cardMatches.length === 2) {
      if (cardMatches[0][0] === cardMatches[1][0]) {
        alert("Match");
        $(this).unbind();
        cardMatches = [];
      } else {
        cardMatches = [];
      }
    }
  });
});
