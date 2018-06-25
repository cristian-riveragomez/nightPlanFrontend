$( document ).ready(function() {
    
   
    
    $("#btnLogin").click( function (){
        
       
        crerJson();  
        
    });
    
    function crerJson ()
    {
        var user = $("#username").val();
        var pass = $("#password").val();

        var usuario = new Object();
        
        var arrayUsuario = new Array()
        arrayUsuario.push("userName: "+ user);
        arrayUsuario.push("password: "+ pass);
        
        usuario.Usuario = arrayUsuario;
        
        //var obj = JSON.parse(loginUsuario); 
        alert(JSON.stringify(usuario));
    }
});