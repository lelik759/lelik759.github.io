


var i =0;

function slider (dir, e ) {

	var sliderText=e.target.parentElement.querySelectorAll(".slider-text");
	
	
	

	if (dir=="arrow-right") {
		sliderText[i].style.display="none";
		++i;
		if (i>=sliderText.length) {
			i=0
		}
		sliderText[i].style.display="block";
   }

   if (dir=="arrow-left") {

	   	sliderText[i].style.display="none";
		--i;
		if (i<=0) {
			i=sliderText.length-1;
		}
		sliderText[i].style.display="block";
	}

} 


var arrowRight=document.querySelectorAll(".arrow-right");


for (var i = 0; i < arrowRight.length; i++) {
	arrowRight[i].onclick=function(e) {
		slider ("arrow-right", e );
	}
}

var arrowLeft=document.querySelectorAll(".arrow-left");


for (var i = 0; i < arrowLeft.length; i++) {
	arrowLeft[i].onclick=function(e) {
		slider ("arrow-left",e);
	}
}









// menu open

document.onclick=function (event) {
	 var target = event.target;
	 if(!target.hasAttribute("data-arrow") ) return;
	 target.classList.toggle("revert");
		
	 var id = target.getAttribute('data-id');
     if (!id) return;
     document.querySelector ("."+id).classList.toggle("show");
 }



 