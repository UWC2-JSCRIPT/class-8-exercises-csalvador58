let color = 255;

let reduceDark = setInterval( function() {
    if(color > 0) {
        color--;
        document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    } else {
        clearInterval(reduceDark);
    }
}, 500);    // in milliseconds or 0.5 secs



