
$(document).ready(function(){

$("#show").hover(function(){
    $("panel").show();
    $alert("I am an alert box!");
     });  
    
 $("button").click(function(){
 $("panel").hide();
    });
    
$("#hide").hover(function(){
    $("panel").hide();
    });
});
