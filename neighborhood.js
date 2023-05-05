const restaurantButton = document.querySelector('#restaurant-button');
const restaurants = ['Fat Cats', 'Quench it'];

restaurantButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    alert(`You should try ${randomRestaurant}!`);
});
``
