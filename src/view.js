
export const renderItems = (data) => {
  console.log(data)



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


    nombre.innerHTML = "PERSONAJE: " + personaje.name;
    imagen.src = personaje.imageUrl;
    imagen.innerHTML = personaje.imageUrl;
    descripcion.innerHTML = personaje.shortDescription;


    li.appendChild(nombre)
    li.appendChild(imagen);
    li.appendChild(descripcion);
    ul.appendChild(li);

  });
  return ul;
  //

};
