import '../css/app2'
import $ from 'jquery';

const $bar = $('.app2 .tab-bar');
const $content = $('.app2 .tab-content');

$bar.on('click', 'li', (event)=>{
    const $current = $(event.currentTarget)
    const $index = $current.index()
    
    $current.toggleClass('selected')
            .siblings().removeClass('selected')

    $content.children()
            .eq($index)
            .toggleClass('selected')
            .siblings().removeClass('selected')

});

//自动触发点击事件
$bar.children().eq(0).trigger('click');