/* ---- */
const getAumento = new Promise ((resolve,reject)=>{
    const tiempo = 10;
    if (tiempo >= 10){
        reject("Ya tengo el tiempo para pedir un aumento")
    }
    else{
        reject("Todavia no puedo pedir aumento no tengo la antiguedad")
    }
});
console.log(getAumento)

getAumento
  .then( (result)=>{
    console.log(result)
  })
  .catch((err)=>{
    console.log(err)
  })