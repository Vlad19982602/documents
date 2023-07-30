const popuped = () => {
	const trigger = document.querySelectorAll('.swiper-slide .minim');
	const btn = document.querySelectorAll('.popup span');

	trigger.forEach(img => {
		img.addEventListener('click', () => {
			document.querySelector('.popup').style.display = 'block';
			document.querySelector('.popup img').src = img.getAttribute('src');
			document.querySelector('.popup img').style.cssText = 'width:30%; height:80%; margin:0 auto;';
		});
	});

	btn.forEach(btns => (
		btns.addEventListener('click', () => {
			document.querySelector('.popup').style.display = 'none';
		})
	));



};

export default popuped;