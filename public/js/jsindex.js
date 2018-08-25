function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function verificarDatos(e) {
	if(e.keyCode === 13){
		e.preventDefault();
		ingresar();
    }
}
$('#home .owl-carousel').owlCarousel({
	lazyLoad: true,
	responsive: {
		0: {
			items: 1
		}
	},
	navigation: false,
	nav: false,
	loop: true,
	dots: false,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	autoplay: true,
	autoplayTimeout: 3000
});