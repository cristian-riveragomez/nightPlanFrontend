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
            var tipoComida = $("#multiSelectTipoComida").val();
            //var barrio = $("#multiSelectBarrio").val();
            var caracteristicas = $("#multiSelectCaracteristicas").val();
            var destacado = $("#checkedProminent").prop("checked");
            
            var check1 = $("#check1").val();
            var check1Int = parseInt(check1);
            alert(check1Int);
            var check2 = $("#check2").val();
            var check2Int = parseInt(check2);
            alert(check2Int);
            var check3 = $("#check3").val();
            var check3Int = parseInt(check3);
            alert(check3Int);
            var check4 = $("#check4").val();
            var check4Int = parseInt(check4);
            alert(check4Int);
        
             
        $("#check1").val(check1Int);
        $("#check2").val(check2Int);
        $("#check3").val(check3Int);
        $("#check4").val(check4Int);

        
        var selected = new Array();   
        $("input:checkbox:checked").each(function() {
            if (this.checked) {
                selected.push($(this).val());

            }
          
        });
              var intBarrios = Array.from(selected);
            alert(intBarrios);
            var establecimiento = new Object();
        
        
            var arrayCaracteristicas = new Array()
            arrayCaracteristicas.push(caracteristicas );
        
            var arrayCaracteristicas2 = arrayCaracteristicas.map(Number);
        
            var arrayTipoComida = new Array()
            arrayTipoComida.push(tipoComida);
            
            var arrayTipoComida2 = arrayTipoComida.map(Number);
        
        
            establecimiento.gastronomia = arrayTipoComida2;
            establecimiento.Barrio = selected;    
            establecimiento.caracteristicas = arrayCaracteristicas2;
            establecimiento.nombre = nombre;
            establecimiento.direccion= direccion;
            establecimiento.destacado= destacado;
         
            //var obj = JSON.parse(nuevoEstablecimiento); 
            
            alert(JSON.stringify(establecimiento));

                
    }

    function ajaxJson() {

        $.get("https://my-json-server.typicode.com/javier-altmann/api-mock/usuarios", function(data, status){
            var contenedorUsuarios = $('#js-usuarios');

            for (var usuario of data) {
                var filaUsuario = $('.js-usuario-fila').clone();

                filaUsuario.find('.js-usuario-id').val(usuario.idUsuario)
                filaUsuario.find('.js-usuario-nombre').val(usuario.nombre)
                filaUsuario.find('.js-usuario-apellido').val(usuario.apellido)
                filaUsuario.find('.js-usuario-email').val(usuario.mail)
                filaUsuario.find('.js-usuario-password').val(usuario.password)
                filaUsuario.find('.js-usuario-nacimiento').val(usuario.fechaNacimiento)
                filaUsuario.data('id', usuario.idUsuario)
                filaUsuario.removeClass('js-usuario-fila')
                filaUsuario.show()

                contenedorUsuarios.append(filaUsuario)
            }
        });
    }

});    
