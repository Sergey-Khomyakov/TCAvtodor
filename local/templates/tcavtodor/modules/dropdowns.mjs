export const dropdowns = () => { 
    $("div[dropdowns]").on("mouseover", function() {
        if (isWideScreen()) {
            var $parent = $(this).closest('div[dropdowns]');
            var $list = $parent.find('div[dropdownsList]');
    
            if(!$list.hasClass('active')){
                $list.addClass('active');
                $list.css('max-height', $list.find('> div').prop('scrollHeight') + 'px');
                $(this).find('img[dropdownsBtn]').addClass('rotate-180');
            }
        }
    })

    $("div[dropdowns]").on("mouseout", function() {
        if (isWideScreen()) {
            var $parent = $(this).closest('div[dropdowns]');
            var $list = $parent.find('div[dropdownsList]');
            $list.removeClass('active');
            $(this).find('img[dropdownsBtn]').removeClass('rotate-180');
            $list.css('max-height', '0px');
        }
    })

    $("div[dropdowns]").on("click", function(e) {
        e.preventDefault();
        console.dir(e);
        if (!isWideScreen() && !$(e.target).closest('div[dropdownsList]').length) {
            var $parent = $(this).closest('div[dropdowns]');
            var $list = $parent.find('div[dropdownsList]');
            $('[dropdownslist]').css({'max-height': '0px'})
            if(!$list.hasClass('active')){
                $list.addClass('active');
                $list.css('max-height', $list.find('> div').prop('scrollHeight') + 'px');
                $(this).find('img[dropdownsBtn]').addClass('rotate-180');
            }else{
                $list.removeClass('active');
                $(this).find('img[dropdownsBtn]').removeClass('rotate-180');
                $list.css('max-height', '0px');
            }
        }
    })
}

export default dropdowns;