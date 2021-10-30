var variableHeight = $(window).height();

$(window).scroll(function(){
  var distanceFromTop = $(document).scrollTop();    
  console.log($(window).height() - distanceFromTop)
  var newHeight = $(window).height() - distanceFromTop;
  variableHeight = newHeight;
  if(newHeight >= 0){
    $('.resize-container').css('height', newHeight + 'px');
  }
  InitMarquee();
});


// MARQUEE STUFF

let so = 0
function Marquee(){
  requestAnimationFrame(Marquee)
  tp.setAttributeNS(null,"startOffset",so+"%");
  if(so >= 50){so = 0;}
  so+= .01
}

Marquee()

function InitMarquee() {
  let w = wrap.clientWidth;
  let h = wrap.clientHeight;
  console.log("clientHeight:  " + h)
  console.log("window height: " + variableHeight)
  h = variableHeight;
  ellipse.setAttributeNS(null, "viewBox", `0 0 ${w}  ${h}`);
  let d=`M100,80 h${w-200} a20,20 0 0 1 20,20 v${h-200} a20,20 0 0 1 -20,20 h-${w-200} a20,20 0 0 1 -20,-20 v-${h-200} a20,20 0 0 1 20,-20 h${w-200} a20,20 0 0 1 20,20 v${h-200} a20,20 0 0 1 -20,20 h-${w-200} a20,20 0 0 1 -20,-20 v-${h-200} a20,20 0 0 1 20,-20 z`;
  if(w<900)
  d=`M60,40 h${w-120} a20,20 0 0 1 20,20 v${h-120} a20,20 0 0 1 -20,20 h-${w-120} a20,20 0 0 1 -20,-20 v-${h-120} a20,20 0 0 1 20,-20 h${w-120} a20,20 0 0 1 20,20 v${h-120} a20,20 0 0 1 -20,20 h-${w-120} a20,20 0 0 1 -20,-20 v-${h-120} a20,20 0 0 1 20,-20 z`;
  else
  d=`M100,80 h${w-200} a20,20 0 0 1 20,20 v${h-200} a20,20 0 0 1 -20,20 h-${w-200} a20,20 0 0 1 -20,-20 v-${h-200} a20,20 0 0 1 20,-20 h${w-200} a20,20 0 0 1 20,20 v${h-200} a20,20 0 0 1 -20,20 h-${w-200} a20,20 0 0 1 -20,-20 v-${h-200} a20,20 0 0 1 20,-20 z`;

  thePath.setAttributeNS(null, "d", d);
  // thePath.setAttributeNS(null, "stroke", "#808600");
  let path_length =  thePath.getTotalLength();
  
  
  //begin at a bigger size than needed then size down
  var font_size = 30;
  if(w>=900){
    font_size = 60;
  }
  ellipse.style.fontSize = font_size+"px"; 

  // thePath.setAttributeNS(null,"textLength",path_length/2)
  
  // while the text length is bigger than half path length 
  while(tp.getComputedTextLength() > path_length / 2 ){
    //reduce the font size
    font_size -= 1;
    //reset the font size 
    ellipse.style.fontSize = font_size+"px";
  }
}



window.setTimeout(function() {
  InitMarquee();
  window.addEventListener("resize", InitMarquee, false);
}, 15);
