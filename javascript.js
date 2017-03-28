// JS


document.addEventListener("DOMContentLoaded", function () {
	

})
var elementsToTurnREd = document.getElementByID("name")

console.log(var label)


var elementsToCenter = document.getElementByID("id label")

console.log(elementsToCenter)

if(elementsToCenter) {
	 elementsToCenter.style.textAlign = "center";
	}
	 

Not complete! look at w3schools

// jQuery 

$(document).ready(function(){
	$('#id label').css({'background-color':'red'})
})

best practice to put javascript at the bottom (in the body) but css in the head - in the html document
<script src="url for javascript or jQuery">
<script src="scripts.js"> </script>  

$('h2').addClass('aligh-center'); 

$('.js-increase-font').on('click', function(){
	$(.element ie class).addClass('large-font');
})

$('h3').on('mouseover', function({
	$(this).animate(opacity; 0,25), 'fast', function(){};
}))