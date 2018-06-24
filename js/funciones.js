$( document ).ready(function() {
    
    $("#btnGuardar").click(function(){

        
        crearJson();
        
        
    });
    
    $("#btnListar").click(function(){
        
       ajaxJson(); 
    });
    
    $("#btnborrar1").click(function(){
        
        $("#fila1").css("display", "none");
    });
    
    $("#btnborrar2").click(function(){
        
        $("#fila2").css("display", "none");
    });
    
    $("#btnborrar3").click(function(){
        
        $("#fila3").css("display", "none");
        
    });
    function crearJson()
    {
         var nombre = $("#inputName").val();
            var direccion = $("#inputAdress").val();
            var barrio = $("#inputBarrio").val();
            var tipoComida = $("#multiSelectTipoComida").val();
            var caracteristicas = $("#multiSelectCaracteristicas").val();
            var destacado = $("#checkedProminent").prop("checked");


            var nuevoEstablecimiento ="[{ Nombre:"+ nombre+", Dirección: "+direccion+", Barrio: "+barrio+", Caracteristicas: "+caracteristicas+", TipoComida: "+tipoComida+ ", Destacado: "+destacado+" }]";
            
            //var obj = JSON.parse(nuevoEstablecimiento); 
            
            alert(nuevoEstablecimiento);

                
    }

    function ajaxJson() {

        $.get("https://my-json-server.typicode.com/javier-altmann/api-mock/usuarios", function(data, status){

            jsonJavi = JSON.stringify(data);        
            alert(jsonJavi);

            for (var i = 0; i < data.length; i++) {

            }
            
            $("#id1").val(data[0].idUsuario);
            $("#nombre1").val(data[0].nombre);
            $("#apellido1").val(data[0].apellido);
            $("#email1").val(data[0].mail);
            $("#contraseña1").val(data[0].password);
            $("#fechaNac1").val(data[0].fechaNacimiento);
            
            $("#id2").val(data[1].idUsuario);
            $("#nombre2").val(data[1].nombre);
            $("#apellido2").val(data[1].apellido);
            $("#email2").val(data[1].mail);
            $("#contraseña2").val(data[1].password);
            $("#fechaNac2").val(data[1].fechaNacimiento);
            
            $("#id3").val(data[2].idUsuario);
            $("#nombre3").val(data[2].nombre);
            $("#apellido3").val(data[2].apellido);
            $("#email3").val(data[2].mail);
            $("#contraseña3").val(data[2].password);
            $("#fechaNac3").val(data[2].fechaNacimiento);
            
        });
    }

});    
