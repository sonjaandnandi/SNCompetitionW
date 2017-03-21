
$(document).ready(function(){

$("#show").hover(function(){
    $("panel").show();
     });  
    
 $("button").click(function(){
 $("panel").hide();
    });
    
$("#hide").hover(function(){
    $("panel").hide();
    });
});
