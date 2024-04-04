// ubicamos elemento/s dentro del DOM
const mensaje = document.querySelector('#mensaje');

// declaramos funcion/es de control
function reloj()
{
    // creamos objeto de fecha
    const fecha = new Date();
    console.log( 'fecha:', fecha );

    // obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    console.log( 'horas:', horas );

    // obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    console.log( 'minutos:', minutos );

    // obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    console.log( 'segundos:', segundos );


    // imprimimos el reloj en el spam
    mensaje.innerText = horas +':'+ minutos +':'+ segundos;
}

// invocamos la función reloj()
reloj();

// Actualizamos el llamado a la función
setInterval( reloj, 1000 );
