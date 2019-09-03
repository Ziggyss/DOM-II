// Your code goes here
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', () =>
event.target.style.color = 'green');

logoHeading.addEventListener('mouseleave', ()=> 
event.target.style.color = 'black');

const html = document.querySelector('html');

html.addEventListener('keydown', () => 
alert('Stop trying to type on this lovely webpage!'));

html.addEventListener('wheel', (event) => 
alert('Wheeeee!!!'));

const anchors = document.querySelectorAll('a');

anchors.forEach(element => element.addEventListener('focus', (event) => {
    event.target.style.background = 'teal';
}));

const image = document.querySelector('img');
image.addEventListener('dblclick', (event) => {
    event.target.style.display = 'none';
})

/* dblclick

select

resize

select

drag */







