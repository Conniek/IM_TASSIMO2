var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	autoplay: true,
	speed: 2000,
	loop: true,
	centeredSlides: false,
	slidesPerView: 2,
	initialSlide: 2,
	keyboardControl: true,
	mousewheelControl: true,
	lazyLoading: true,
	coverflow: {
		rotate: 0,
		stretch: 0,
		depth: 600,
		modifier: 1,
		slideShadows : false,
	}
});