
// promesas

import { getHeroeById } from "./bases/08-imp-exp";
import heroes from "./data/heroes";


/*const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
       
       const p1 = getHeroeById(2);
       resolve(p1);
       //reject( 'no se puede encontrar el heroe');
    }, 2000);
});

promesa.then( (heroe) => {
    console.log('heroe', heroe)
})
.catch(err => console.warn( err ));
*/

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
           
           const p1 = getHeroeById(id);
           if( p1){
             resolve(p1);
           }else {
             reject( 'no se puede encontrar el heroe');
           } 
        }, 2000);
    });


}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn )