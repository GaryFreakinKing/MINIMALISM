document.body.onload = function() {
	setTimeout(function() {
		var preload = document.getElementById('page-preloader');
		if( !preload.class.contains('done'))
		{
			preload.classList.add('done');
		}
	}, 1000);
}