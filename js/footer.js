class mail__newsletter{
    constructor(pMail){
        this.mail = pMail;
    }
}

var form1 = document.getElementById("form__news1");
var listo = document.getElementById("listoFooter");
var usuario__mail__news = [];

$("#form__news1").submit(function(e){
    e.preventDefault();
    let formValues = new FormData(e.target);
    let nuevoUsuarioNews = new mail__newsletter (formValues.get("pMail"));
    form1.reset();
    usuario__mail__news.push(nuevoUsuarioNews);
    localStorage.setItem("Mail Newsletter", JSON.stringify(usuario__mail__news));
    listo.innerHTML = "Muchas Gracias!";
})