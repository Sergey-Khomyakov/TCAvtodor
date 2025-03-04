document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.querySelectorAll('[tab]');

    if(tabs.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('tab');
            if(!tabId) return;

            // hidden old content
            const oldTabContent = document.querySelector('[tabContent]:not(.hidden)');
            oldTabContent.classList.add('hidden', 'bg-lightGray');
            oldTabContent.classList.remove('grid', 'bg-lightGray');

            // show new content
            const tabContent = document.querySelector(`[tabContent="${tabId}"]`);
            tabContent.classList.remove('hidden', 'bg-lightGray');
            tabContent.classList.add('grid', 'bg-lightGray');
        })
    });
 });