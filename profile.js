const colorButton = document.querySelector('#color');
const placeButton = document.querySelector('#place');
const ritualButton = document.querySelector('#ritual');

colorButton.addEventListener('click', () => {
    alert('My favorite color is blue.');
});

placeButton.addEventListener('click', () => {
    alert('My favorite place is anywhere cold and doesnt have snakes');
});

ritualButton.addEventListener('click', () => {
    alert('My favorite ritual is slaying my enemies, seeing them driven before me and....');
});
