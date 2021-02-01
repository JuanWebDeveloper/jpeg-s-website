$(document).ready(function(){
	$('.menuAC li:has(ul)').click(function(e){
		e.preventDefault();

		if ($ (this).hasClass('activado')) {
			$(this).removeClass('activado');
			$(this).children('ul').slideUp();
		}else{
			$('.menuAC li ul').slideUp();
			$('.menuAC li').removeClass('activado');
			$(this).addClass('activado');
			$(this).children('ul').slideDown();
		}
	});
});
