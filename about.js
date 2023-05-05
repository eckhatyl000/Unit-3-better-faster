console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();

	alert('Form submitted successfully!');
}

const image = document.querySelector('img');
const compliments = [
	'You have excellent taste in websites.',
	'You are a coding ninja!',
	'Your smile is contagious.',
	'You are such a cool person',
	'You must play games like Diablo 2 or something to be this cool'
];

image.addEventListener('mouseover', () => {
	const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
	alert(randomCompliment);
});


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);