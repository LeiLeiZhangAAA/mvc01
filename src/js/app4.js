import '../css/app4'
import $ from 'jquery'

const html = `
    <section class="app4">
        <div class="circle"></div>
    </section>
`;
const $element = $(html).appendTo($('body .app-wrapper'));

const $circle = $('.app4 .circle');
$circle.on('mouseenter', ()=>{
    $circle.addClass('active');
})
$circle.on('mouseleave', ()=>{
    $circle.removeClass('active');
})