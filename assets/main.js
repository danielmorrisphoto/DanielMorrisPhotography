

// $('.pop').on('click', function() {
// 	$('.imagepreview').attr('src', $(this).find('img').attr('src'));
// 	$('#imagemodal').modal('show');  
// });	

$(document).ready(function() {
	$(".fancybox").fancybox({
		Width: "100%",
		Height: "100%",
		autoCenter: true, 	
		aspectRatio: true,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true
			}
		}
	});
});


// Add this to custom CSS for Fancybox 
// .fancybox-next {
//     right: -32px;
// }

window.sr = ScrollReveal({ duration: 2000 });
sr.reveal('.reveal-flow', {
	
}, 50);

