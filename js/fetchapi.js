const URL_API ='data/campers.json';
const verDatos = document.querySelector("#Verdatos")
/* -- */

myInfo.addEventListener("click",(verDatos));

function loadData(){
    fetch(URL_API)
      .then((response)=>{
        return response.json();
      })
      .then((data) =>{
        viewHTML(data);
      })
}

function viewHTML(myInfo){
    const divContainer = documen.querySelector("#Contenedor");
    const {id,nombre,edad,nivelInglish} = myInfo;
    divContainer.innerHTML=`
    <p>${id}</p>
    <br>
    <p>${nombre}</p>
    <p>${edad}</p>
    <p>${nivelInglish}</p>
    `
}
