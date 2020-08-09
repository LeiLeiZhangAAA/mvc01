import '../css/app1'
import $ from 'jquery';

//初始化html
const html = `
    <section class="app1">
        <div class="output">
            <span class="number">100</span>
        </div>
        <div class="actions">
            <button class="add1">+1</button>
            <button class="minus1">-1</button>
            <button class="mul2">*2</button>
            <button class="divide2">/2</button>
        </div>
    </section>
`;
const $element = $(html).appendTo($('body .app-wrapper'));

const $button1 = $('.add1');
const $button2 = $('.minus1');
const $button3 = $('.mul2');
const $button4 = $('.divide2');
const $number = $('.number');
const n= localStorage.getItem('n');
$number.text(n || 100);

$button1.on('click', ()=>{
    let n= parseInt($number.text());
    n +=1;
    localStorage.setItem('n', `${n}`);
    $number.text(n);
});

$button2.on('click', ()=>{
    let n= parseInt($number.text());
    n -= 1;
    localStorage.setItem('n', `${n}`);
    $number.text(n);
});

$button3.on('click', ()=>{
    let n = parseInt($number.text());
    n *=2;
    localStorage.setItem('n', `${n}`);
    $number.text(n);
});

$button4.on('click', ()=>{
    let n= parseInt($number.text());
    n /=2;
    localStorage.setItem('n', `${n}`);
    $number.text(n);
});
