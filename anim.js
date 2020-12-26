$(document).ready(function() {
	
$("html, body").animate({ scrollTop: 0 }, 100);

anime({
	targets: '.intro-div .iword-hello',
	translateY: 250,
	duration: 1000,
	easing: 'easeInOutQuad',
	complete: function(anim) {
		anime({
			targets: '.intro-div .iword-hello',
			color: 'rgba(255, 255, 255, 0)',
			duration: 500,
			easing: 'linear',
			complete: function(anim) {
				$(".iword-hello").remove();
				anime({
					targets: '.intro-div .iword-basic',
					color: 'rgba(255, 255, 255, 1)',
					duration: 500,
					easing: 'linear',
					complete: function(anim) {
					 	anime({
							targets: '.intro-div .iword-name',
							color: 'rgba(100, 149, 237, 1)',
							duration: 1000,
							easing: 'linear',
							complete: function(anim) {
								 anime({
									targets: '.intro-div .iword-basic2',
									color: 'rgba(255, 255, 255, 1)',
									duration: 500,
									easing: 'linear',
									complete: function(anim) {
										anime({
											targets: '.intro-div .iword-basic3',
											color: 'rgba(255, 255, 255, 1)',
											duration: 500,
											easing: 'linear',
											complete: function(anim) {
												anime({
													targets: '.intro-div .iword-basic4',
													color: 'rgba(255, 255, 255, 1)',
													duration: 500,
													easing: 'linear',
													complete: function(anim) {
														
													}
												 });
											}
										 });
									}
								 });
							}
						});
						
					}
				});
				
			}
		});
		
	}
});

});