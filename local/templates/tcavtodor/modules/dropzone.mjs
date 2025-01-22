export const dropzone = () =>{ 
    $('label[data-dropzone]').each(function() {
        const $dropzone = $(this);
        // Предотвращаем стандартное поведение браузера
        $dropzone.on('dragover', function(event) {
            event.preventDefault();
            $(this).addClass('bg-gray-100'); // Изменяем цвет фона при перетаскивании
        });
    
        $dropzone.on('dragleave', function() {
            $(this).removeClass('bg-gray-100'); // Возвращаем цвет фона
        });
    })
}

export default dropzone;