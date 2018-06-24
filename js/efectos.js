$(function() {
    $('#nav li > a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 90)
        }, 1000, "swing");
    });
});

 

$("#btnGuardar").click(function(){

     var nombre= $("#inputName").val();
    alert(nombre);
    var direccion= $("#inputAdress").val();
    alert(direccion);
    var altura= $("#inputNumber").val();
    alert(altura);
});

function validateFields()
{
    var nombre= $("#inputName").val();
    alert(nombre);
    var direccion= $("#inputAdress").val();
    alert(direccion);
    var altura= $("#inputNumber").val();
    alert(altura);

}
