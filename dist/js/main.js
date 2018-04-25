'use strict';

document.querySelectorAll('[data-goto]').forEach(function ($navlink) {
	var $content = document.querySelector('.content');
	$navlink.addEventListener('click', function () {
		$content.setAttribute('data-show', this.getAttribute('data-goto'));
	});
});
//# sourceMappingURL=main.js.map
