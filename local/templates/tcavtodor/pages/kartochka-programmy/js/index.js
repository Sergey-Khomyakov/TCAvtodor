import { tariffs } from './data.mjs';
import dialogMeneger from './../../../modules/dialogMeneger.mjs'
import tabs from './../../../modules/tabs.mjs'

$(function() { 
    dialogMeneger();
    tabs();
    
    const tariffsBlock = document.querySelector('[tariffsBlock]');
    const tariffsBtns = tariffsBlock.querySelector('[tariffsBtns]');
    const tariffsBody = tariffsBlock.querySelector('[tariffsBody]');

    tariffs.forEach((item, index) => {
        let btn = null;

        if(index === 0){
            btn = Object.assign(document.createElement("button"),
             {
                className: "rounded-lg bg-gradient-orange text-white font-Helvetica font-normal text-base p-2 px-4",
                textContent: item.title,
                type: "button",
            });
            btn.setAttribute('tariffsActive', true);
            // set default tariffs
            renderTariffInfo(tariffsBody, item);
            
        }else{

            btn = Object.assign(document.createElement("button"),
             {
                className: "rounded-lg border-2 border-primary text-primary font-Helvetica font-normal text-base p-2 px-4",
                textContent: item.title,
                type: "button"
            });
            btn.setAttribute('tariffsActive', false);
        }

        btn.setAttribute('tariffs', item.id);

        btn.addEventListener('click', (e) =>{
            e.preventDefault();

            const btn = e.currentTarget;
            const isActive = (/true/).test(btn.getAttribute('tariffsActive'));
            if(isActive) return;

            //remove active tariffs
            const activeOldTariff = tariffsBtns.querySelector('[tariffsActive="true"]');
            activeOldTariff.setAttribute('tariffsActive', false);
            activeOldTariff.classList.remove('bg-gradient-orange', 'text-white');
            activeOldTariff.classList.add('border-2', 'border-primary', 'text-primary');
            
            //add active tariffs
            btn.setAttribute('tariffsActive', true);
            btn.classList.remove('border-2', 'border-primary', 'text-primary');
            btn.classList.add('bg-gradient-orange', 'text-white');
            
            //render tariffs info
            renderTariffInfo(tariffsBody, tariffs.find(item => item.id === Number(btn.getAttribute('tariffs'))));

        });

        tariffsBtns.appendChild(btn)
    });
});

const getOption = (option) => {
    const element = Object.assign(document.createElement("div"), {className: "flex gap-4 items-center"});
    const p = Object.assign(document.createElement("p"), {className: "font-Helvetica font-normal text-base text-black text-balance", textContent: option.name});
    const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    iconSvg.setAttribute("width", "24");
    iconSvg.setAttribute("height", "24");
    iconSvg.setAttribute("viewBox", "0 0 32 32");
    iconSvg.setAttribute("fill", "none");
    iconSvg.setAttribute("class", "shrink-0");

    const iconPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    iconPath1.setAttribute("d", "M21.5 13L14.1666 20L10.5 16.5");
    iconPath1.setAttribute("stroke", "#fd7e14");
    iconPath1.setAttribute("strokeWidth", "4");
    iconPath1.setAttribute("strokeLinecap", "round");
    iconPath1.setAttribute("strokeLinejoin", "round");

    const iconPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    iconPath2.setAttribute("d", "M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z");
    iconPath2.setAttribute("stroke", "#fd7e14");
    iconPath2.setAttribute("strokeWidth", "4");
    iconPath2.setAttribute("strokeLinecap", "round");
    iconPath2.setAttribute("strokeLinejoin", "round");

    iconSvg.appendChild(iconPath1);
    iconSvg.appendChild(iconPath2);

    element.appendChild(iconSvg);
    element.appendChild(p);
    return element;
}

const renderTariffInfo = (tariffsBody, item) => {
    const tariffsOptions = tariffsBody.querySelector('[tariffsOptions]');
    const tariffsPrise = tariffsBody.querySelector('[tariffsPrise]');
    const tariffsPriseDefoult = tariffsBody.querySelector('[tariffsPriseDefoult]');

    // remove old tariffs info
    tariffsOptions.innerHTML = "";

    item.options.forEach(option => {
        const optionElement = getOption(option);
        tariffsOptions.appendChild(optionElement);
    });

    if(item.discounts > 0){
        tariffsPrise.textContent = (item.price - item.discounts) + " ₽"
        tariffsPriseDefoult.textContent = item.price + " ₽"
        tariffsPriseDefoult.classList.remove('hidden');

    }else{
        tariffsPrise.textContent = item.price + " ₽"
        tariffsPriseDefoult.classList.add('hidden');
    }
    
}