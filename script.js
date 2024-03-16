let body = document.body
let ball = document.querySelector('.ball')
let gates = document.querySelectorAll('.gate')
let span_1 = document.querySelector('.span_1')
let span_2 = document.querySelector('.span_2')
let restart = document.querySelector('.restart')
ball.ondragstart = () => {

    setTimeout(() => {
        ball.style.display = "none"
    }, 0);
}

ball.ondragend = () => {
    ball.style.display = "block"
}


body.ondragover = (e) => {
    e.preventDefault();
}

body.ondrop = (event) => {
    let {x, y} = event

    ball.style.top = y + "px"
    ball.style.left = x + "px"
}
gates.forEach(gate => {
    gate.ondragenter = () => {
    var scalar = 2;
    var pineapple = confetti.shapeFromText({ text: '⚽️', scalar });

    confetti({
    shapes: [pineapple],
    scalar
    });
        if(gate.id === 'two'){
            span_2.innerHTML++
        } else {
            span_1.innerHTML++
        }
    }
})
restart.onclick = () => {
   span_1.innerHTML = 0
   span_2.innerHTML = 0
   ball.style.translate = '-50% -50%'
   ball.style.top = '50%'
   ball.style.left = '50%'
}


