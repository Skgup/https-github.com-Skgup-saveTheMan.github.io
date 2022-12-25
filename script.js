audio = new Audio('go2.mp4');
audiogo = new Audio('gameover.mp4');
audioj = new Audio('jump.mp4')
setTimeout(() => {
    audio.play();
}, 2000);

score = 0
cross = true;
document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode);
    if (e.keyCode == 38) {

        man = document.querySelector('.man');
        man.classList.add('animateMan');
        audioj.play();
        setTimeout(() => {
            
            man.classList.remove('animateMan');
        }, 700);

    }
    if (e.keyCode == 39) {

 
        man = document.querySelector('.man');
        manx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = manx + 112 + "px";
        audioj.play();
    }
    if (e.keyCode == 37) {


        man = document.querySelector('.man');
        manx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = (manx - 112) + "px";
        audioj.play();
    }
    // if (e.keyCode == 32) {


    //     start=document.querySelector('.start');
    //     start.classList.add('startAni');
       
    // }
}

setInterval(() => {
    man = document.querySelector('.man');
    gameover = document.querySelector('.gameover');
    car = document.querySelector('.car');
    mx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));

    cx = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(car, null).getPropertyValue('top'));

    offsetx = Math.abs(mx - cx);
    offsety = Math.abs(my - cy);
    console.log(offsetx, offsety)
   
    if (offsetx < 93 && offsety < 54) { 
        
        gameover.style.visibility = 'visible';
       
        car.classList.remove('carAni');
 audiogo.play();
 audio.pause();
       
       

       
    }
    else if (offsetx < 145 && cross) {
        score += 50;
        
        updateScore(score);
        cross = false;
         
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parsefloat(window.getComputedStyle(car, null).getPropertyValue('animation-duration'));
            newDur = (aniDur - 0.1);
            car.style.animationduration = (newDur + 's');
        }, 500);
    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = ("Your Score: " + score);
}
var input = document.getElementById("sstart");
input.addEventListener("keydown", function(event) {
    if (e.keyCode === 13) {
        event.preventDefault();
        document.getElementById("start").click();
    }
});
