let pages_to_animate = ['#about', '#feature', '#team'];

$(window).scroll(function(){
	// let scroll_position = $(document).scrollTop();
	// console.log(scroll_position)
	// if(scroll_position > 208){
	// 	$('nav').fadeOut();
	// }else{
	// 	$('nav').fadeIn();
	// }
	let scroll_position = $(document).scrollTop();


	for(let i=0; i<pages_to_animate.length; i++){
		if(scroll_position > $(pages_to_animate[i]).offset().top){
			$(pages_to_animate[i]).find('.wrapper_content').fadeIn();
			if($('.side_menu').css('display')=="block"){
				$('.side_menu').fadeOut('fast');
			}
		}
	}
});

$('#fondee_logo').click(function(){
		$('html, body').animate({scrollTop: 0}, 500);
});

$(document).on('click', 'nav li a', function(){
	let page_id = $(this).attr('data-page');
	let page_position = $(page_id).offset().top-50;
	$('html, body').animate({scrollTop: page_position}, 500);
});


$('#mobile_menu_button').click(function(){
	if($('.side_menu').css('display')=="none"){
		$('.side_menu').fadeIn('fast');
	}else{
		$('.side_menu').fadeOut('fast');
	}
})
