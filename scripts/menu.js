const $menuFacturas = document.querySelector('#menu-contenedor');
const API_URL = "../data/data.json";

export const crearMenu = async (url) => {

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    data.facturas.forEach(factura => {
        const contenedor = document.createElement('div');
        const nombre = document.createElement('p');
        const descripcion = document.createElement('p');
    
        nombre.textContent = factura.sabor;
        descripcion.textContent = `(${factura.descripcion})`;
    
        contenedor.append(nombre, descripcion);
        $menuEmpanadas.appendChild(contenedor);
    });
};
