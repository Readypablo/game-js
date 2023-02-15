window.addEventListener('load', () => {

    const left = 37,
        right = 39,
        top = 38,
        down = 40;

    let app = document.querySelector('.app');
    let ball = document.querySelector('.ball');

    window.addEventListener('keydown', e => {
        let bl = ball.getBoundingClientRect();
        if (e.keyCode == left) {
            if (bl.left > 0) {
                ball.style.left = bl.left - 16 + "px";
            }
        } else if (e.keyCode == right) {
            if (bl.left < (app.offsetWidth - ball.offsetWidth)) {
                ball.style.left = bl.left + 16 + "px";
            }
        } else if (e.keyCode == down) {
            if (bl.top < (app.offsetHeight - ball.offsetHeight)) {
                ball.style.top = bl.top + 16 + "px";
            }
        } else if (e.keyCode == top) {
            if (bl.top > 0) {
                ball.style.top = bl.top - 16 + "px";
            }
        }

    });
});