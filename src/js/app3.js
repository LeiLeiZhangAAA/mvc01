import '../css/app3'
import $ from 'jquery'
 
const $square = $('.app3 .square');

$square.on('click', (event)=>{
    $(event.currentTarget).toggleClass('active');
})