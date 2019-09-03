// Your code goes here
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', () =>
event.target.style.color = 'green');

logoHeading.addEventListener('mouseleave', ()=> 
event.target.style.color = 'black');

const html = document.querySelector('html');

html.addEventListener('keydown', () => 
alert('Stop trying to type on this lovely webpage!'));







