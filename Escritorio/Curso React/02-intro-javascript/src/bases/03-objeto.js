
// Objetos literalrs

const persona = {
    nombre: 'Tony',
    apellido: 'Start',
    edad: 45,
    direcion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.32323,
        lng: 34.9233321
    }
};

//console.table( persona );

const persona2 = {...persona};
persona2.nombre = 'Peter';



  console.log( persona );
  console.log( persona2 );




