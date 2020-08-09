import '../css/app2'
import $ from 'jquery';

const html = `
    <section class="app2">
        <ol class="tab-bar">
            <li>1</li>
            <li>2</li>
        </ol>
        <ol class="tab-content">
            <li>内容1</li>
            <li>内容2</li>
        </ol>
    </section>
`;
const $element = $(html).appendTo($('body .app-wrapper'));

const $bar = $('.app2 .tab-bar');
const $content = $('.app2 .tab-content');
const localKey2 = 'app2.index';
const $index = localStorage.getItem(localKey2) ?? 0;

$bar.on('click', 'li', (event)=>{
    const $current = $(event.currentTarget)
    const $index = $current.index()
    localStorage.setItem(localKey2, $index);

    $current.toggleClass('selected')
            .siblings()
            .removeClass('selected')

    $content.children()
            .eq($index)
            .toggleClass('selected')
            .siblings()
            .removeClass('selected')

});

//自动触发点击事件
$bar.children().eq($index).trigger('click');