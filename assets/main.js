

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

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}