'use strict';
const default_picture= 'http://placehold.it/300x300';
let user = '';

const image= document.querySelector('.picture');

if (user === '') {
    image.src = default_picture;
} else {
    image.src = 'http://www.fillmurray.com/300/300';
}