jQuery(document).ready(function (){
	var headerMenu = $('.header__menu');
	var headerMenuItem = $('.header__menu-item');
	var toggleNavButton = $('.heeader__menu-toggle');

	headerMenuItem.on('click',function(e){

		if($(this).next('ul')){
			e.preventDefault();
			headerMenuItem.removeClass('open');
			$(this).toggleClass('open');

		}
    	e.stopPropagation();
	});

	$(document).click(function(){
		$('.header__menu-item').removeClass('open');
	});

	toggleNavButton.on('click', function (){
		headerMenu.toggleClass('open');
		$(this).toggleClass('active');
	})

});
