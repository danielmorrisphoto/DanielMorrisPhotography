

// $('.pop').on('click', function() {
// 	$('.imagepreview').attr('src', $(this).find('img').attr('src'));
// 	$('#imagemodal').modal('show');  
// });	

$(document).ready(function() {
	$(".image-responsive").fancybox({
		minWidth:"800px",
		minHeight:"800px",
		autoCenter:true, 	
		aspectRatio:true,
		modal:true,

	});
});

window.sr = ScrollReveal({ duration: 2000 });
sr.reveal('.reveal-flow', {

}, 50);

