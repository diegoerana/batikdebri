class mail__newsletter{
    constructor(pMail){
        this.mail = pMail;
    }
}

$(document).ready(function(){

    function showModal(){
        $('#news__contenedor').show();
        $('html body').css('overflow','hidden');
    }

    function closeModal(){
        $('#news__contenedor').hide();
    }

    setTimeout(showModal,3000);

    $('#close').click(function(){
        closeModal();
        $('html body').css('overflow','scroll');
    })
});

var usuario__mail__news = [];
var form = document.getElementById("form__news");
var genial = document.getElementById("genial");

$("#form__news").submit(function(e){
    e.preventDefault();
    let formValues = new FormData(e.target);
    let nuevoUsuarioNews = new mail__newsletter (formValues.get("pMail"));
    form.reset();
    usuario__mail__news.push(nuevoUsuarioNews);
    localStorage.setItem("Mail Newsletter", JSON.stringify(usuario__mail__news));
    genial.innerHTML = "Listo!!!";
    function closeModal(){
        $('#news__contenedor').hide();
        $('html body').css('overflow','scroll');
    }
    setTimeout(closeModal,1500);
})

var form1 = document.getElementById("form__news1");
var listo = document.getElementById("listoFooter");

$("#form__news1").submit(function(e){
    e.preventDefault();
    let formValues = new FormData(e.target);
    let nuevoUsuarioNews = new mail__newsletter (formValues.get("pMail"));
    form1.reset();
    usuario__mail__news.push(nuevoUsuarioNews);
    localStorage.setItem("Mail Newsletter", JSON.stringify(usuario__mail__news));
    listo.innerHTML = "Muchas Gracias!";
})