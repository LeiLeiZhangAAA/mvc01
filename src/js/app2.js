import '../css/app2'
import $ from 'jquery';

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