$(document).ready(function(){
	$('.enlaces').click(function(){
		var valor = $(this).attr('data-nombre');
		if(valor == 'todos'){
			$('.filtro').show('1000');

		}else{
			$('.filtro').not('.' + valor).hide('1000');
			$('.filtro').filter('.' + valor).show('1000');
		}

		$('ul .enlaces').click(function(){
			$(this).addClass('activo').siblings().removeClass('activo');
		});
	});
});




document.addEventListener('DOMContentLoaded', () => {
	const imglightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imglightBox, {
		inDuration: 300,
		outDuration: 300
	});
});
