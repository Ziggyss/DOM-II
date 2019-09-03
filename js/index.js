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
});

const paragraph = document.querySelector('p');

/* paragraphs.forEach(element => element.addEventListener('select', (event) => {
    alert("Don't even think about copying this text...");
    console.log('select function');
})); */ 

//Come back to the select code later - am I trying to select the wrong thing? Should it be the text?

window.addEventListener('resize', () => {
    console.log('Are you sure you want to resize that?');
});

paragraph.addEventListener('mouseenter', (event) => {
    event.target.style.background = 'pink';
});


//Revisit the complicated code example on mdn and look into drag/drop again later: 

/* var dragged

document.addEventListener('drag', (event) => {
}, false);

document.addEventListener('dragstart', (event => {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false));

document.addEventListener('dragend', (event) => 
 {event.target.style.opacity = "";}, false);

 document.addEventListener('drop', () => {
     event.preventDefault();
     if(event.target.className ==)
 }) */

 image.addEventListener('drag', (event) => {
     console.log('trying to drag image');
 });

 var input = document.createElement('input');
 logoHeading.appendChild(input);

 paragraph.addEventListener('select', () => {
    console.log("You selected something");
});

const title = document.querySelector('h2');

title.addEventListener('mouseover', (event)=> {
    event.target.style.background = 'purple';
});

paragraph.addEventListener('click', (event) => {
    console.log('You clicked me');
    event.stopPropagation();
})

anchors.forEach(element => element.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('default was prevented');
}));







