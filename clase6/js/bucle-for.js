const marcas = [
    'Hermès', 'Zara', 'Boss', 
    'Aeropostale', 'Tommy', 'Hollister',
    'Gola', 'Kingpin', 'Old Navy', 
    'Ambercrombie', 'Fitch'
   ];
const largo = marcas.length;

   document.write('<ul>');

// for (  inicio; condicion; incremento )   
for( let n = 0; n < largo; n++ ){
    document.write('<li>' + marcas[n] + '</li>' );
}

    document.write('</ul>')