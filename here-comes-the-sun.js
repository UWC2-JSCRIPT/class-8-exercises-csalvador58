// Here Comes The Sun
// 1. Using requestAnimationFrame, animate the background-color of the body so that it changes from black rgb(0, 0, 0) to white rgb(255, 255, 255).  It should increment by 1every frame.

// Once the background-color is rgb(255, 255, 255), should not call requestAnimationFrame again.
// It should take approximately 4-5 seconds for the background to animate from black to white.
let color = 0;

const hereComesTheSun = () => {
    if(color < 255) {
        color++;
    document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;

    requestAnimationFrame(hereComesTheSun);
    }
};

requestAnimationFrame(hereComesTheSun);
    