import { getHeroesById } from "./heroes.js";

const getHeroesByIdAsync = (id) => {

    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            const p1 = getHeroesById( id );
            if (p1){
                resolve(p1);
            }
            else{
                reject('no se pudo encontrar el heroe.');
            }
        }, 2000)

    })
}

import { getHeroesByOwner } from "./heroes.js";

const getHeroesByOwnerAsynic = (owner) => {

    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            const p1 = getHeroesByOwner( owner );
            if (p1){
                resolve(p1);
            }
            else{
                reject('no se pudo encontrar el heroe.');
            }
        }, 2000)

    })
}

getHeroesByIdAsync(3)
    .then(console.log)
    .catch(console.log);


getHeroesByOwnerAsynic("Dc")
    .then(console.log)
    .catch(console.log);
