export const accordion = () => { 
    $('div[accordion]').on('click', function(){
        let $parent = $(this);
        let $body = $parent.find('div[accordion__body]');
        let icon = $parent.find('[accordion-icon]');
        let $title = $parent.find('.font-inter.font-semibold');

        if (!$body.hasClass('active')) {
            $body.addClass('active')
            $parent.addClass('bg-success-50');
            $parent.find('>div:first-child').addClass('pt-3 pb-2');
            $parent.find('>div:first-child').removeClass('py-2');
            $title.addClass('text-success-700');
            $title.removeClass('text-gray-600');

            $body.css('max-height', $body.prop('scrollHeight') + 'px');
            icon.addClass('rotate-180');
        } else {
            $body.removeClass('active')
            $parent.removeClass('bg-success-50');
            $parent.find('>div:first-child').removeClass('pt-3 pb-2');
            $parent.find('>div:first-child').addClass('py-2');
            $title.addClass('text-gray-600');
            $title.removeClass('text-success-700');

            $body.css('max-height', '0px');
            icon.removeClass('rotate-180');
        }
    })
 };
export default accordion;