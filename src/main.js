import { renderItems } from './view.js';
import { filterData } from './dataFunctions.js';
import data from './data/dataset.js';
import { sortData } from './dataFunctions.js';
import { computeStats } from './dataFunctions.js';

const mainNode = document.getElementById('root');

mainNode.appendChild(renderItems(data))

let datosFiltrados = "";
const filtroEspecie = document.querySelector('select[data-testid="select-filter"]')  //selecciono el select de mi html 
filtroEspecie.addEventListener('change', function () {
  const especieSeleccionada = filtroEspecie.value                  //para que me de el valor seleccionado ya que filtroEspecie representa elemento select
  const ResultadoFiltro = filterData(data, "especie", especieSeleccionada);                      //Añade un Event Listener a ese elemento <select> para detectar cuando cambie la selección.

  datosFiltrados = ResultadoFiltro;
  mainNode.innerHTML = '';
  mainNode.appendChild(renderItems(ResultadoFiltro));  //ejecutar renderitems pasando la funcion del resultado del filtro

});

const ordenNombre = document.querySelector('select[data-testid="select-sort"]')
ordenNombre.addEventListener('change', function () {
  const ordenSeleccionado = ordenNombre.value

  if (datosFiltrados) {
    const resultadoOrden = sortData(datosFiltrados, "name", ordenSeleccionado);
    mainNode.innerHTML = '';
    mainNode.appendChild(renderItems(resultadoOrden));
  }
  else {
    const resultadoOrden = sortData(data, "name", ordenSeleccionado);
    mainNode.innerHTML = '';
    mainNode.appendChild(renderItems(resultadoOrden));
  }


});

const Limpiar = document.getElementById('reset-button');
Limpiar.addEventListener("click", () => {
  filtroEspecie.innerHTML = '';
  ordenNombre.innerHTML = '';


});

const estadistica = document.getElementById('promedio');
const resultadoElemento = document.getElementById('resultado');

estadistica.addEventListener("click", () => {
  const resultado = computeStats(data);
  resultadoElemento.textContent = "promedio:" + resultado;

});
