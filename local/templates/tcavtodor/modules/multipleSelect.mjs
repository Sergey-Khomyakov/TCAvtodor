export const multipleSelect = () =>{ 
    $('div[data-multipleSelect]:not(.disabled)').on('click','div[listInput]', function(e){
        e.preventDefault();

        const $parent = $(this).closest('div[data-multipleSelect]');
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

    $('div[data-multipleSelect]:not(.disabled)').on('click', 'div[data-value]', function(){
        const $item = $(this);
        const $parent = $(this).closest('div[data-multipleSelect]');
        const $icon = $item.find('img');
        const $valueBox = $parent.find('div[listInput] p[data-value]');
        const oldValue = $valueBox.attr('data-value');
        const oldText = $valueBox.text();

        // Получаем данные от выбранного элемента
        const value = $item.attr('data-value');
        const text = $item.find('p[multipleSelectVal]').text();
        
        if($icon.hasClass('hidden')){
            $icon.removeClass('hidden');
            $parent.removeClass('border-[#22AA5C] border-error-400');
            const newValue = oldValue !== "" ? oldValue + "," + value : value;
            const newText = oldText !== "" ? oldText + ", " + text : text;
            $parent.find('div[listInput] p[data-value]').attr("data-value", newValue).text(newText);
        }else{
            $icon.addClass('hidden');
            // Удаляем значение и текст
            let newValue = oldValue.split(",").filter(v => v !== value).join(",");
            let newText = oldText.split(", ").filter(t => t !== text).join(", ");

            // Удаляем лишнюю запятую в начале или конце строки
            newValue = newValue.replace(/^,|,$/g, '');
            newText = newText.replace(/^, |, $/g, '');

            // Обновляем значение и текст
            $valueBox.attr("data-value", newValue).text(newText);
        }
    })
}

export default multipleSelect;
