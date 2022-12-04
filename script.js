const btn = document.querySelector('.playground__btn');
btn.addEventListener('mouseenter', moveBtn);

const random = function(min, max) {
	const result = min + Math.random() * (max-min + 1)
	return Math.floor(result)
}

function moveBtn(e) {
	// e.preventDefault()
	btn.style.left = `${random(0, 84)}%`;
	btn.style.top = `${random(0, 84)}%`;
}
