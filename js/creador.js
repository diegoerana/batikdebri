var usuarios = [];
var form = document.getElementById("form");
var usuarioLocal = null;
var datos = document.getElementById("datos");


let divRemera = document.createElement("div");
divRemera.id = "divRemera";
document.body.appendChild(divRemera);

let divBuzo = document.createElement("div");
divBuzo.id = "divBuzo";
document.body.appendChild(divBuzo);

//Formulario Usuario

$("#form").submit(function(e){
    e.preventDefault();
    let formValues = new FormData(e.target);
    let nuevoUsuario = new usuarioGeneral (formValues.get("pNombre"), formValues.get("pEdad"), formValues.get("pMail"));
    usuarioLocal = document.getElementById("pNombre").value;
    form.reset();
    usuarios.push(nuevoUsuario);
    localStorage.setItem("Usuario", JSON.stringify(usuarios));
    datos.innerHTML = "Bienvenido "+usuarioLocal;
    $("#datos").fadeIn("slow");

})
//Talles
var remeras = [];
var buzos = [];
function mostrarTalle(){
    talle = document.getElementById("talleRemera").value;
    remeras.push(talle);
}
function mostrarTalleBuzo(){
    talleBuzo = document.getElementById("pTalleBuzo").value;
    buzos.push(talleBuzo);
}

//CheckBoxs REMERA
function remeraNegra(){
    color = document.getElementById("pColorNegro").value;
    remeras.push(color);
}
function remeraBlanca(){
    color = document.getElementById("pColorBlanco").value;
    remeras.push(color);
}
function remeraBatik(){
    color = document.getElementById("pColorBatik").value;
    remeras.push(color);
}
//CheckBoxs Buzo
function buzoNegro(){
    colorBuzo = document.getElementById("pColorNegroBuzo").value;
    buzos.push(colorBuzo);
}
function buzoBlanco(){
    colorBuzo = document.getElementById("pColorBlancoBuzo").value;
    buzos.push(colorBuzo);
}
function buzoBatik(){
    colorBuzo = document.getElementById("pColorBatikBuzo").value;
    buzos.push(colorBuzo);
}

//Estampa REMERA
function mostrarEstampa(){
    estampa = document.getElementById("pEstampa").value;
    remeras.push(estampa);
}
//ESTAMPA BUZO
function mostrarEstampaBuzo(){
    estampaBuzo = document.getElementById("pEstampaBuzo").value;
    buzos.push(estampaBuzo);
}
//Diseño REMERA
function mostrarDiseño(){
    mangas = document.getElementById("pMangas").value;
    remeras.push(mangas);
}
//Diseño BUZO
function mostrarDiseñoBuzo(){
    diseño = document.getElementById("diseñoBuzo").value;
    buzos.push(diseño);
}

//Formulario Remera

var formRemera = document.getElementById("formRemera");

$("#formRemera").submit(function(e) {
    e.preventDefault();
    divRemera.innerHTML += `
    <p class="divRemeraTitulo">Tu remera: <p>
    <p>Talle: ${remeras[0]}.<p>
    <p>Color: ${remeras[1]}.<p>
    <p>Estampa: ${remeras[2]}.<p>
    <p>Mangas: ${remeras[3]}.<p>
    <p>Recibirás un Mail con instrucciones para realizar la compra. Muchas gracias!<p>`
    form.reset();
    localStorage.setItem("Remera", JSON.stringify(remeras));
    $("#divRemera").fadeIn("slow");
})

//Formulario BUZO
var formBuzo = document.getElementById("formBuzo");
$("#formBuzo").submit(function(e){
    e.preventDefault();
    divBuzo.innerHTML += `
    <p class="divBuzoTitulo">Tu Buzo: <p>
    <p>Talle: ${buzos[0]}.<p> 
    <p>Color: ${buzos[1]}.<p>
    <p>Estampa: ${buzos[2]}.<p>
    <p>Diseño: ${buzos[3]}.<p>`
    form.reset();
    localStorage.setItem("Buzo", JSON.stringify(buzos));
    $("#divBuzo").fadeIn("slow");

})

  
  