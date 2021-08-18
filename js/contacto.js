class contacto{
    constructor(pNombreApellido, pMailContacto, pConociste, pNews, pComent){
        this.nombre = pNombreApellido;
        this.mail = pMailContacto;
        this.conociste = pConociste;
        this.news = pNews;
        this.coment = pComent;

    }
}

var formC = document.getElementById("#formContacto");
var usuariosContacto = [];

$("#formContacto").submit(function(e){
    e.preventDefault();
    let formValues = new FormData(e.target);
    let usuarioContacto = new contacto (formValues.get("pNombreApellido"), formValues.get("pMailContacto"), formValues.get("pConociste"), formValues.get("pNews"), formValues.get("pComent"));
    $("#formContacto").trigger("reset");
    usuariosContacto.push(usuarioContacto);
    localStorage.setItem("Usuario contacto", JSON.stringify(usuariosContacto));

})