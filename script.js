const faqs = document.querySelectorAll('.faq-card__question-block');

faqs.forEach((faq) => {
	// console.log(faq);
	faq.querySelector('.faq-card__question').addEventListener('click', () => {
		const answer = faq.querySelector('.faq-card__answer');
		const icon = faq.querySelector('.toggle-icon');

		if (answer.style.display === 'block') {
			answer.style.display = 'none';
			icon.src = 'assets/images/icon-plus.svg';
		} else {
			answer.style.display = 'block';
			icon.src = 'assets/images/icon-minus.svg';
		}
	});
});
