const persona = {
    nombre: "Tony",
    edad: "45",
    clave: "iroman"
}

/* const Retornopersona = (persona) => {

    const {edad, clave, nombre} = persona;

    console.log(edad,nombre,clave);
} */

const useConstext = ({clave,nombre,edad, rango = 'Capitan'}) => {
    return{
        nombreClave: clave,
        años: edad,
        lating:{
            lat: 14.1322,
            lgn:12.312,
        }
    }
    
}

const {nombreClave,años,lating: {lat,lgn}} = useConstext(persona);

console.log(nombreClave,años);
console.log(lat,lgn);

/* ////////////////////////////////////////////////////// */

const personajes = ['goku','vegeta','trunks'];
const [, , p3] = personajes;
console.log(p3);

const retornoArreglo = () =>{
    return ['ABC',123];
}

const [letras,numeros] = retornoArreglo();
console.log(letras,numeros);

