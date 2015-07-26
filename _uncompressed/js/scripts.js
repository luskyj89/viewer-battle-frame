var leftScore = $("#left-score");
var rightScore = $("#right-score");
var leftPlayer = $("#left-player");
var rightPlayer = $("#right-player");
var gameType = $("#game-type");
var scoreToggle = $("#score-toggle");


function init() {

}

function enterScore() {
    TweenLite.to(gameType, 1, { top: 0, ease: Cubic.easeOut });
    TweenLite.to(leftPlayer, 1, { top: 0, delay: .5, ease: Cubic.easeOut });
    TweenLite.to(rightPlayer, 1, { top: 0, delay: .5, ease: Cubic.easeOut });
    TweenLite.to(leftScore, .6, { opacity: 1, delay: 1.1, ease: Cubic.easeOut });
    TweenLite.to(rightScore, .6, { opacity: 1, delay: 1.1, ease: Cubic.easeOut });

}

function hideScore() {
    TweenLite.to(gameType, 1, { top: -117, delay: .6, ease: Cubic.easeOut });
    TweenLite.to(leftPlayer, 1, { top: -44, ease: Cubic.easeOut });
    TweenLite.to(rightPlayer, 1, { top: -44, ease: Cubic.easeOut });
    TweenLite.to(leftScore, .6, { opacity: 0, ease: Cubic.easeOut });
    TweenLite.to(rightScore, .6, { opacity: 0, ease: Cubic.easeOut });
}

scoreToggle.click(function() {
    if ( scoreToggle.hasClass("enter") ) {
        hideScore();
        scoreToggle.removeClass("enter");
    } else {
        enterScore();
        scoreToggle.addClass("enter");
    }
});

$(document).ready(function(){
    init();
});
