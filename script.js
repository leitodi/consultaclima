let api_key = '8682985340d2302bcc0c2df0b3b7854a';

let diferencia = 273.15;
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';


document.getElementById('botonBusqueda').addEventListener('click', ()=> {
    const ciudad = document.getElementById('ciudadEntrada').value;

    if(ciudad){
        fetchDatosClima (ciudad);
    } 
});

function fetchDatosClima (ciudad){
console.log (ciudad);
    fetch (`${urlBase}?q=${ciudad}&appid=${api_key}`)
.then(data => data.json())
.then(data => mostrarDatosClima(data));

}

function mostrarDatosClima (respuesta){

    console.log(respuesta);
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML=''; //lo inicializa vacio

    const dataNombre = respuesta.name;
    const dataPais = respuesta.sys.country;
    const temperatura = respuesta.main.temp;
    const humedad = respuesta.main.humidity;
    const descripcion = respuesta.weather[0].description;
    const icono = respuesta.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent =`${dataNombre}, ${dataPais}`;
    console.log (temperatura);
    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es:${Math.floor(temperatura-diferencia)}ºC`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es:${humedad} %`;

    const iconInfo = document.createElement('img');
    iconInfo.src =`https://openweathermap.org/img/wn/${icono}@2x.png`;
    
    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconInfo);
    divDatosClima.appendChild(descripcionInfo);


}
