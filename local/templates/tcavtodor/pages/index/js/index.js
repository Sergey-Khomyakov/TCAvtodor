document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('load', handleResponsiveLayout);
    window.addEventListener('resize', handleResponsiveLayout);
});

function handleResponsiveLayout() {
    const screenWidth = window.innerWidth;
    const sliderContainer = document.querySelector('div[programs] .slider-container');
    const contentsDiv = sliderContainer.querySelector('.contents');
    const articles = Array.from(sliderContainer.querySelectorAll('article'));

    if (screenWidth < 1024) {
        // Если ширина экрана меньше 1024px
        if (contentsDiv) {
            // Удаляем родителя с классом contents, оставляя дочерние элементы
            while (contentsDiv.firstChild) {
                sliderContainer.insertBefore(contentsDiv.firstChild, contentsDiv);
            }
            contentsDiv.remove();
        }
    } else {
        // Если ширина экрана больше или равна 1024px
        if (!contentsDiv) {
            // Создаем новый div с классом contents, если его нет
            const newContentsDiv = document.createElement('div');
            newContentsDiv.classList.add('contents', '@xs/body:w-max', '@5xl/body:w-auto', '@5xl/body:grid', '@5xl/body:grid-cols-3', '@5xl/body:auto-rows-fr', 'gap-4', 'pb-4');
            sliderContainer.appendChild(newContentsDiv);

            // Перемещаем все элементы article в новый div
            articles.forEach(article => {
                newContentsDiv.appendChild(article);
            });
        }
    }
}