jQuery(document).ready(function (){
	var headerMenuItem = $('.header__menu-item');

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

});
