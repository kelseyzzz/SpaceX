document.querySelectorAll('[data-goto]').forEach(function ($navlink) {
	let $content = document.querySelector('.content');
	$navlink.addEventListener('click', function () {
		$content.setAttribute('data-show', this.getAttribute('data-goto'))		
	})
})