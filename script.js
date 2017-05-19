    // function clickMe(){ 
    //     var audioTest = new Audio('sounds/rave_digger.mp3');
    //     audioTest.play();
    // }
    var audioTest = new Audio('sounds/rave_digger.mp3');
    var isPlaying = false;

    //TODO toggle click on long song //
    function clickMe() {
       //var audioTest = new Audio('sounds/rave_digger.mp3');
        if (isPlaying) {
            audioTest.pause()
        } else {
            audioTest.play();
        }
    };
    audioTest.onplaying = function() {
      isPlaying = true;
    };
    audioTest.onpause = function() {
      isPlaying = false;
    };
    function playMe() {
        let audio = new Audio('sounds/80s_vibe.mp3');
            audio.play();       
    }
    function play1() {
        let audio = new Audio('sounds/piano/a1.mp3');
            audio.play();  
    }
    function play2() {
           let audio = new Audio('sounds/piano/b1.mp3');
            audio.play();  
    }
    function play3() {
           let audio = new Audio('sounds/piano/c1.mp3');
            audio.play();  
    }
    function play4() {
           let audio = new Audio('sounds/piano/c2.mp3');
            audio.play();  
    }
    function play5() {
           let audio = new Audio('sounds/piano/d1.mp3');
            audio.play();  
    }
    function play6() {
           let audio = new Audio('sounds/piano/e1.mp3');
            audio.play();  
    }
    function play7() {
           let audio = new Audio('sounds/piano/f1.mp3');
            audio.play();  
    }
    function play8() {
           let audio = new Audio('sounds/piano/d1s.mp3');
            audio.play();  
    }
    function play9() {
           let audio = new Audio('sounds/piano/e1.mp3');
            audio.play();  
    }
    function play10() {
           let audio = new Audio('sounds/piano/f1.mp3');
            audio.play();  
    }
    function play11() {
           let audio = new Audio('sounds/piano/g1.mp3');
            audio.play();  
    }
    function play12() {
           let audio = new Audio('sounds/piano/g1s.mp3');
            audio.play();  
    }
    

