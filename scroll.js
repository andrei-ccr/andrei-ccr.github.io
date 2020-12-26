$(document).ready(function() {
	
	const checkpoint = ($(".intro-div").outerHeight() + $(".work-div").outerHeight() ) / 2 ;

	window.addEventListener("scroll", () => {
		const currentScroll2 = window.pageYOffset;
		const currentScroll = window.pageYOffset - 500;
		  
		if (currentScroll2 <= checkpoint) {
			opacity2 = 1 - (currentScroll2 / checkpoint) * 2;
		} else {
			opacity2 = 0;
		}
		  
		if (currentScroll <= checkpoint) {
			opacity = 0 + (currentScroll / checkpoint) * 2;
		} else {
			opacity = 1;
		}
		  
		document.querySelector(".work-div").style.opacity = opacity;
		document.querySelector(".intro-div").style.opacity = opacity2;
		  
		if(opacity2 <= 0) {
			document.querySelector(".intro-div").style.zIndex = -150;
		} else {
			document.querySelector(".intro-div").style.zIndex = 150;
		}
		
		if(opacity <= 0) {
			document.querySelector(".work-div").style.zIndex = -150;
		} else {
			document.querySelector(".work-div").style.zIndex = 150;
		}
		
		  //document.querySelector("#curscroll").innerHTML = currentScroll;
	});
});
