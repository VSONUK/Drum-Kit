var numberOfDrumButtons = document.querySelectorAll('.drum').length

// press by button with mouse make drum sound
for (var i = 0;i<numberOfDrumButtons;i++){
    document.querySelectorAll('button')[i].addEventListener('click',function () {
        
        // var drumButton = this.innerHTML
        play_action(this.innerHTML)
        buttonAnimation(this.innerHTML)

    })    
}

// press keyboard to make drum sound
document.addEventListener('keypress', function(event){play_action(event.key),buttonAnimation(event.key)})


function play_action (drumButton){
    switch (drumButton){
        case "w" :  var audio = new Audio('sounds/tom-1.mp3')
                    audio.play()
                    break
        case 'a' :  var audio = new Audio('sounds/tom-2.mp3')
                    audio.play()
                    break
        case 's' :  var audio = new Audio('sounds/tom-3.mp3')
                    audio.play()
                    break
        case 'd' :  var audio = new Audio('sounds/tom-4.mp3')
                    audio.play()
                    break
        case 'j' :  var audio = new Audio('sounds/snare.mp3')
                    audio.play()
                    break
        case 'k' :  new Audio('sounds/crash.mp3').play()
                    // audio.play()
                    break
        case 'l' :  new Audio('sounds/kick-bass.mp3').play()
                    // audio.play()
                    break
        // default : alert('notcorrect button'+ drumButton)
    }
}

function buttonAnimation (animation){    
    document.querySelector('.'+animation).classList.add('pressed')
    setTimeout(function() { document.querySelector('.'+animation).classList.remove('pressed')},100)
}