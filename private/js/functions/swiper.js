var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	autoplay: true,
	speed: 2000,
	loop: false,
	centeredSlides: false,
	slidesPerView: 3,
	initialSlide: 4,
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