var marginY=0;
var destino = 0;
var velocidad = 5;
var scroller = null;

function initScroller(elementId){
    destino = document.getElementById(elementId).offsetTop;

    scroller = setTimeout(function(){
            initScroller(elementId);
    }, 1);

    marginY = marginY + velocidad;

    if(marginY>= destino){
        clearTimeout(scroller);
    }

    window.scroll(0 , marginY);
}