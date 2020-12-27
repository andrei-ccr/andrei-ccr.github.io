$(document).ready(function() {

	var imgIndex = 0;
	var projectImgs = [["a1.png", "a2.png", "a3.png"], ["b1.png", "b2.png", "b3.png", "b4.png"]];
	var currentProject = null;
	var projectDetails = [
		{
			name: "Driving Test Ro",
			desc: `A platform that simulates the romanian driving theory exam. The quiz is designed to look like the official one and adds a learning feature that displays the correct answer.<br><br>
			
			Note: The website is NOT in English`,
			tags: ["PHP", "MySQL", "jQuery"],
			site: "https://drivingtestro.herokuapp.com/",
			srcsite: null
		},
		{
			name: "Cloud Fileman",
			desc: "File storage service that allows users to upload and manage files on their own virtual space located on the local server. It can also integrate with other cloud services (such as Google Cloud), making it possible to store files on other servers.",
			tags: ["PHP", "MySQL", "Security", "Cloud Services Integration"],
			site: null,
			srcsite: "https://github.com/andreiccr/cloud-fileman"
		}
	];

	function Slide(i) {
		if(currentProject == null) return;
		
		imgIndex = imgIndex + i;
		if(imgIndex >= projectImgs[currentProject].length) imgIndex = 0;
		if(imgIndex < 0) imgIndex = projectImgs[currentProject].length - 1;
		
		$(".slide").html(`
			<a href="images/`+ projectImgs[currentProject][imgIndex] +`"><img src="images/`+projectImgs[currentProject][imgIndex]+`"></a>
		`);
		
	}

	function ShowModal(proj) {
		if(proj >= 2) return;
		currentProject = proj;
		
		let tags = "";
		projectDetails[proj].tags.forEach(function(val) {
			tags += "<span>" + val + "</span>";
		});
		
		let buttons = (projectImgs[proj].length > 1)?`<button id="slide-left-btn">&lt;</button><button id="slide-right-btn">&gt;</button>`:"";
		
		let prev = (projectDetails[proj].site==null)?"":"<button class='viewsite-btn' data-url='"+projectDetails[proj].site+"'>Preview Site <i class='fas fa-search'></i></button>";
		prev += (projectDetails[proj].srcsite==null)?"":`<a href='`+projectDetails[proj].srcsite+`' class='viewsrc-btn'>View source code <i class="fas fa-laptop-code"></i></a>`;
		
		$("body").append(`
			<div class="modal">
				<div class="container">
					<div class="slide"><a href="images/`+ projectImgs[proj][0] +`"><img src="images/`+ projectImgs[proj][0]+`"></a></div>		
					
					`+ buttons +`
					
					<h1>`+ projectDetails[proj].name +`</h1>
					<div class="tags">`+ tags +`</div>
					<p>`+ projectDetails[proj].desc +`</p>
					`+ prev +`
					
					<a class="close-btn">Close</a>
				</div>
			</div>
		
		`);
	}

	$(document).on("click", "#slide-right-btn", function() {
		Slide(1);
	});
	$(document).on("click", "#slide-left-btn", function() {
		Slide(-1);
	});

	$(".projects-wrapper .project").on("click", function() {
		ShowModal($(this).data("id"));
	});

	$(document).on("click", ".modal", function(e) {

		if(e.target !== e.currentTarget) return;
		currentProject = null;
		$(this).remove();
	});
	
	$(document).on("click", ".modal .close-btn", function(e) {
		$(".modal").remove();
	});
	
	$(document).on("click", ".viewsite-btn", function(e) {
		location.href = $(this).data("url");
	});

});
		