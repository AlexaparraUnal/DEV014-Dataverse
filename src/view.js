
export const renderItems = (data) => {

  const ul = document.createElement('ul');
  ul.classList.add("card-container");

  data.forEach(function (personaje) {
 
    const li = document.createElement('li');
    li.setAttribute("itemtype",personaje.id)
    li.setAttribute('itemscope','')
    li.classList.add('card')

    const nombre = document.createElement('p')
    const imagen = document.createElement('img')
    const descripcion = document.createElement('p')
    const extras = document.createElement('p')

    nombre.innerHTML =  personaje.name;
    imagen.src = personaje.imageUrl;
    descripcion.innerHTML = personaje.shortDescription;
    extras.innerHTML = "Especie:" +personaje.facts.especie;

    li.appendChild(nombre)
    li.appendChild(imagen);
    li.appendChild(descripcion);
    li.appendChild(extras);
    ul.appendChild(li);
    
  });
  return ul;
  
};
