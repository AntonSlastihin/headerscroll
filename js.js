$(window).scroll(() => {
	let header  = $('#header'),
		wrapper = $(header).find('.header-wrapper');
	$(wrapper).toggleClass('active', $(this).scrollTop() >= $(header).height());
});