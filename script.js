const exp_academica = [
  {
    "titulo": "GS Desarrollo de Aplicaciones Web",
    "periodo": "2025-27",
    "centro": "CPR Afundación A Coruña"
  },
  {
    "titulo": "GM Sistemas Microinformáticos y Redes",
    "periodo": "2023-25",
    "centro": "Otro cole"
  }
];

const exp_profesional = [
  {
    "puesto": "Desarrollador web junior (prácticas)",
    "periodo": "2026",
    "empresa": "Nombre de la empresa"
  },
  {
    "puesto": "Dependiente",
    "periodo": "2023-24",
    "empresa": "Nombre del comercio"
  }
];

// Crea un elemento con una clase y un texto.
function crearElemento(etiqueta, clase, texto) {
  const elemento = document.createElement(etiqueta);
  elemento.className = clase;
  elemento.textContent = texto;
  return elemento;
}

// Pinta una lista de objetos dentro del contenedor indicado.
// campos indica qué propiedades hacen de título y de lugar en cada array.
function mostrarExperiencia(lista, idContenedor, campos) {
  const contenedor = document.getElementById(idContenedor);
  contenedor.innerHTML = "";

  lista.forEach((item) => {
    const articulo = document.createElement("article");
    articulo.className = "item";
    articulo.appendChild(crearElemento("h3", "item-titulo", item[campos.titulo]));
    articulo.appendChild(crearElemento("p", "item-lugar", item[campos.lugar]));
    articulo.appendChild(crearElemento("p", "item-periodo", item.periodo));
    contenedor.appendChild(articulo);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarExperiencia(exp_academica, "lista-academica", {
    titulo: "titulo",
    lugar: "centro"
  });
  mostrarExperiencia(exp_profesional, "lista-profesional", {
    titulo: "puesto",
    lugar: "empresa"
  });
});