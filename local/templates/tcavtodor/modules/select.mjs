

export const select = () =>{ 
    $('div[data-select]:not(.disabled)').on('click','div[listInput]', function(e){
        e.preventDefault();

        const $parent = $(this).closest('div[data-select]');
        const $list = $parent.find('div[list]');

        // Получаем размеры и позиции
        const offset = $list.offset(); // Получаем позицию списка
        const height = $list.find('div[listBlock]').outerHeight(); // Высота списка
        const viewportHeight = $(window).height(); // Высота viewport
        const scrollTop = $(window).scrollTop(); // Положение прокрутки сверху

        if (offset.top + height > scrollTop + viewportHeight) {
            // Список выходит за пределы, меняем положение
            $list.css({
                top: 'unset',
                bottom: '100%'
            });
        } else {
            // Список помещается в viewport
            $list.css({
                top: '100%',
                bottom: 'unset'
            });
        }

        if($list.hasClass('h-0')){
            $list.removeClass('h-0');
            $parent.find('img[list-btn]').addClass('rotate-180');
            $parent.addClass('border-[#22AA5C]');
        }else{
            $list.addClass('h-0');
            $parent.find('img[list-btn]').removeClass('rotate-180');
            $parent.removeClass('border-[#22AA5C] border-error-400');
        }
    });

    
    $('div[data-select]:not(.disabled)').on('click', 'div[data-value]', function(){
        const $item = $(this);
        const $block = $(this).closest('div[data-select]')
        const $list = $block.find('div[list]');
        
        // Получаем данные от выбранного элемента
        const value = $item.attr('data-value');
        const text = $item.find('p[selectVal]').text();
        
        $list.addClass('h-0');
        $block.removeClass('border-[#22AA5C] border-error-400');
        $block.find('div[listInput] p[data-value]').attr("data-value", value).text(text);
        $block.find('img[list-btn]').removeClass('rotate-180')
    })
}


export default select;