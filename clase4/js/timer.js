const mensaje = document.querySelector('#mensaje');

let n = 0;

function timer()
{
    n++;
    mensaje.innerText = n;
}

timer();
setInterval(timer, 1000)