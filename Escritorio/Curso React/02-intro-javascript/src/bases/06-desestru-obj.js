
//Desestructuracion
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const userContext = ({clave, nombre, edad, rango = 'capitan'})=> {

    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.3333,
            lng: -11.8889

        }
    }

}

//const avenger = userContext(persona);

//console.log(avenger);

const {nombreClave, anios,latlng: { lat, lng} } = userContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);


