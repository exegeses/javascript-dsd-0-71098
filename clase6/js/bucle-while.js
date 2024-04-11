const marcas = [
    'Hermès', 'Zara', 'Boss', 
    'Aeropostale', 'Tommy', 'Hollister',
    'Gola', 'Kingpin', 'Old Navy', 
    'Ambercrombie', 'Fitch'
   ];
const largo = marcas.length;

   document.write('<ul>');
let n = 0;

  while( n < largo ){
    document.write('<li>' + marcas[n] + '</li>' );
    n++;
  }
    document.write('</ul>')