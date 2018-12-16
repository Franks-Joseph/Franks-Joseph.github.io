function Animate() {
    var div_id_animate = document.getElementById("animate");
     
    var position = 0;
    var height = 50;
  
    /*
    set an interval for how many times an element's position is adjusted.
    */
    var refresh = setInterval(frame, 5);
    function frame() {
  
     if (position <= 450) {
       position++;
       div_id_animate.style.left = position + 'px';
       
     }
      
    }
  }
  
  function Transition() {
    document.getElementById("box").style.transition = "all .5s";
  }