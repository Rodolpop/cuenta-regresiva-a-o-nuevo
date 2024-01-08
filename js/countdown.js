


simplyCountdown('#cuenta', {

	year: 2025, 
	month: 1, 
	day: 1, 
	hours: 1, 
	minutes: 1, 
	seconds: 1, 
	words: { 
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true, 
	inline: false, 
	inlineClass: 'simply-countdown-inline', 
	
	enableUtc: true, 
	onEnd: function() {
		document.getElementById('portada').classList.add('oculta');
		return; 
	}, 
	refresh: 1000, 
	sectionClass: 'simply-section', 
	amountClass: 'simply-amount', 
	wordClass: 'simply-word', 
	zeroPad: false,
	countUp: false
});