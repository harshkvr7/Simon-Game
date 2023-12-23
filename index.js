function playaudio(argu) {
    switch (argu) {
        case "red":
            var audio = new Audio("./sounds/red.mp3")
            audio.play();
            break;
        case "blue":
            var audio = new Audio("./sounds/blue.mp3")
            audio.play();
            break;
        case "green":
            var audio = new Audio("./sounds/green.mp3")
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("./sounds/yellow.mp3")
            audio.play();
            break;
        default:
            break;
    }
}

function nextsequence(){
    var randomNumber =  Math.floor(Math.random()*4);
    var randomChosenColor = buttoncolors[randomNumber];
    level += 1;

    
    flashAndPlayColor(randomChosenColor);
    $("h1").text("Level "+level);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
}
    
   


function flashAndPlayColor(color) {
    $("#" + color).fadeOut(150).fadeIn(150);
    playaudio(color);
}

function animatePress(argu) {
    $("#"+argu).addClass("pressed");
    setTimeout(function(){
        $("#"+argu).removeClass("pressed");

    },100);
}
function gameover() {
    var aud = new Audio("./sounds/wrong.mp3")
    aud.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    gamePattern=[];
    userClickedPattern=[];
    level = 0;
    i=0;
    j=0;
    

}    
var i=0
var j = 0;
function checkAnswer() {
    
    if (gamePattern[i] == userClickedPattern[i]) {
        console.log("success");
        if (i === gamePattern.length - 1) {
            j=0;
            
            setTimeout(function () {
                nextsequence();
            }, 1000);
            userClickedPattern = [];
        }
        
        i+=1;
        
    }
    else if (gamePattern[j] == userClickedPattern[j]) {
        j+=1;
        console.log("ei");
    }else{
        gameover();
    }
    
    
}


var gamePattern = [];
var userClickedPattern = [];

let level = 1 ;

var buttoncolors = ["red","blue","green","yellow"];

var randomNumber =  Math.floor(Math.random()*4);
    var randomChosenColor = buttoncolors[randomNumber];
    

$("body").on("keypress",function(){
    gamePattern = [];
    flashAndPlayColor(randomChosenColor);
    $("h1").text("Level "+level);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
})


$(".btn").on("click",function(event){
    userClickedPattern.push(event.target.id) ;
    console.log(userClickedPattern);
    
    playaudio(event.target.id);
    animatePress(event.target.id);
    checkAnswer();
});




