document.addEventListener('DOMContentLoaded', function(){
    const btnBurgermenu = document.querySelector('[burgermenu]');

    if(btnBurgermenu !== null){
        btnBurgermenu.addEventListener('click', function(e){
            const mode = e.currentTarget.getAttribute('burgermenu');
            const header = e.currentTarget.closest('header');
            const nav = header.querySelector('[nav]');
            const path = e.currentTarget.querySelector('path.invisible');
            path.classList.remove('invisible');
            if(mode === 'false'){
                nav.classList.remove('@xs/header:max-w-0');
                nav.classList.add('p-4');
                e.currentTarget.setAttribute('burgermenu', 'true');
                const pathPrimary = e.currentTarget.querySelector('path:nth-child(1)');
                pathPrimary.classList.add('invisible');
            }else{
                nav.classList.add('@xs/header:max-w-0');
                nav.classList.remove('p-4');
                e.currentTarget.setAttribute('burgermenu', 'false');
                const pathSecondary = e.currentTarget.querySelector('path:nth-child(2)');
                pathSecondary.classList.add('invisible');
            }
        });
    }

 });