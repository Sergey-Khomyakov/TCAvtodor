export const tabs = () => { 
    const tabs = document.querySelectorAll('[tab]');

    if(tabs.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('tab');
            if(!tabId) return;

            // hidden old content
            const oldTabContent = document.querySelector('[tabContent]:not(.hidden)');
            oldTabContent.classList.add('hidden');
            oldTabContent.classList.remove('grid');

            // show new content
            const tabContent = document.querySelector(`[tabContent="${tabId}"]`);
            tabContent.classList.remove('hidden');
            tabContent.classList.add('grid');
        })
    });
 };
export default tabs;