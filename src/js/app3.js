import '../css/app3'
import $ from 'jquery'

const html = `
    <section class="app3">
        <div class="square"></div>
    </section>
`;
const $element = $(html).appendTo($('body .app-wrapper'));

const $square = $('.app3 .square');
const localKey3 = 'app3.active';
const active = localStorage.getItem(localKey3) === 'yes';

$square.toggleClass('active', active);

$square.on('click', (event)=>{
    $(event.currentTarget).toggleClass('active');
    if($square.hasClass('active')){
        localStorage.setItem(localKey3, 'yes');
    }else{
        localStorage.setItem(localKey3, 'no');
    }
})