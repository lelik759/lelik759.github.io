


var i =0;




function slider (dir, e ) {

	var sliderText=e.target.parentElement.querySelectorAll(".slider-text");
	// console.log(sliderText);
	
	

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
console.log(arrowRight);

for (var j = 0; j < arrowRight.length; j++) {
	arrowRight[j].onclick=function(e) {
		slider ("arrow-right", e );
	}
}

var arrowLeft=document.querySelectorAll(".arrow-left");
console.log(arrowLeft);

for (var j = 0; j < arrowLeft.length; j++) {
	arrowLeft[j].onclick=function(e) {
		slider ("arrow-left",e);
	}
}






// var arrowleft=document.querySelectorAll(".arrow-left");

// arrowleft.addEventListener("click", goLeft );


// function goLeft ( ) {
// 	sliderText[i].style.display="none";
// 	--i;
// 	if (i<=0) {
// 		i=sliderText.length-1;
// 	}
// 	sliderText[i].style.display="block";
// } 



// menu open

// document.onclick=function (event) {
// 	 var target = event.target;
// 	 if(!target.hasAttribute("data-arrow") ) return;
// 	 target.classList.toggle("revert");
		
// 	 var id = target.getAttribute('data-id');
//      if (!id) return;
//      document.querySelector ("."+id).classList.toggle("show");
//  }



 