$( document ).ready(function() {
    
   
    
    $("#btnLogin").click( function (){
        
        var user = $("#username").val();
        var pass = $("#password").val();
        alert(user+pass);    
        
    });
});