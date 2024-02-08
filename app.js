import { crearMenu } from "./scripts/menu.js";

const $menuFacturas = document.querySelector('#menu-contenedor');
const API_FACTURAS = "./data/data.json";

crearMenu(API_FACTURAS);
