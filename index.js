
// Imports
import Base from './models/Base.js'
import BusBase from './models/BusBase.js'

// ? Elements
let btnAdd = document.querySelector('#btnAdd');
let btnDelete = document.querySelector('#btnDelete');
let btnSearch = document.querySelector('#btnSearch');
let btnPrint = document.querySelector('#btnPrint');
let btnCreateRoad = document.querySelector('#btnCreateRoad');

// ? Constants
const list = document.querySelector("#list");


// ? Listeners
btnAdd.addEventListener("click", () => {
    let nombreBase = (document.querySelector('#nombreBase'));
    let tiempoBase = (document.querySelector('#tiempoBase'));
    let base1 = new Base(nombreBase.value, Number(tiempoBase.value));
    BusBase.addBase(base1);
});

btnDelete.addEventListener("click", () => {
    let targetBase = document.querySelector("#eliminarBase");
    BusBase.deleteBase(targetBase.value);
});

btnSearch.addEventListener("click", () => {
    let targetBase = document.querySelector("#buscarBase");
    let base = BusBase.searchBase(targetBase.value);
    list.innerHTML = "";
    list.innerHTML += base.articleToHtml();
});

btnPrint.addEventListener("click", () => {
    BusBase.print();
});

btnCreateRoad.addEventListener("click", () => {
    let initialBase = document.querySelector("#baseInicio");
    let initialTime = document.querySelector("#horaInicio");
    let endTime = document.querySelector("#horaFin");
    BusBase.crearRecorrido(initialBase.value, initialTime.value, endTime.value);
});
