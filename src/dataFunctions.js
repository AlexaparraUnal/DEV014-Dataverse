import data from './data/dataset.js';

export function filterData(data, filterBy, value) {



  const ResultadoFiltro = data.filter((personaje) => {

    return personaje.facts[filterBy].toString() === value
  })



  return ResultadoFiltro
}

export function sortData(data, sortBy, sortOrder) {

  const copyData = [...data];

  const ordenarNombre = (a,b)=> {

    const valorA=a[sortBy];
    const valorB=b[sortBy];


    let compararValores;             //funcion de comparacion 
    if (valorA < valorB) {
      compararValores = -1;          //A debe ubicarce antes del vaor b (negativo)
    } else if (valorA > valorB) {
      compararValores = 1;           //A debe ubicarse despues del valor b (positivo)
    } else {
      compararValores = 0;            //no importa la posicion ya que son iguales 
      
    }
    if (sortOrder === "desc") {
      compararValores *= -1;             // se multiplica por -1 para invertir el resultado de la comparacion de A Y B 

    }
    return compararValores;
  };
  const resultadoOrdenado=copyData.sort(ordenarNombre);

  return resultadoOrdenado;
}


export function computeStats(data){
  const edadPersonaje = data.map(personaje=>personaje.facts.edad)
  const sumaEdades = edadPersonaje.reduce((a, b) => a + b, 0);
  const cantidadPersonajes=edadPersonaje.length;
  const edadPromedio= sumaEdades/cantidadPersonajes;
 
  return edadPromedio
}

computeStats(data);