
document.addEventListener('DOMContentLoaded', function(){
    const btns = document.querySelectorAll('[dialog-btn]:not([dialog-btn="close"])');
    const dialog = document.querySelector('#dialog');
    const close = document.querySelector('[dialog-btn="close"]');

    if(btns.length === 0) return;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const btnType = btn.getAttribute('dialog-btn')
            if(!btnType) return;
            renderDialogForm(btn, dialog)
            dialog.showModal();
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            const body = document.body;
            body.style.position = 'relative';
            body.style.top = `-${scrollY}`;
            document.querySelector('body').classList.add('overflow-hidden', 'pr-[17px]');
        })
    })

    close.addEventListener('click', () => {
        //
            const body = document.body;
            const scrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1); 
        //
        dialog.close();
        const dialogBody = dialog.querySelector('[dialogBody]');
        dialogBody.innerHTML = '';
        document.querySelector('body').classList.remove('overflow-hidden', 'pr-[17px]');
    })

    document.addEventListener('keyup', function (event) {
        // ✅ [CURRENT]
        if ( event.key === "Escape" ) {
            dialog.close();
            const dialogBody = dialog.querySelector('[dialogBody]');
            dialogBody.innerHTML = '';
            document.querySelector('body').classList.remove('overflow-hidden', 'pr-[17px]');
        }
      })

    // fix scroll
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
  });

const renderDialogForm = (btn, dialog) => {
    const dialogBody = dialog.querySelector('[dialogBody]');
    const type = btn.getAttribute('dialog-btn');

    if(type === "login"){
        const inputArr = [
            {
                type: "text",
                title: "Логин (e-mail)",
                inputName: "login",
                placeholder: "",
                isRequest: true
            },
            {
                type: "password",
                title: "Пароль",
                inputName: "password",
                placeholder: "",
                isRequest: true
            },
        ];
        const contentBox = Object.assign(document.createElement("div"), {className: "flex flex-col gap-6"});
        const contentTitle = Object.assign(document.createElement("p"), {className: "font-Helvetica font-semibold text-xl text-black", textContent: "Вход в личный кабинет"});
        const contentForm = Object.assign(document.createElement("form"), {className: "flex flex-col gap-4", method: "dialog", action: "POST"});

        if(dialog.classList.contains('!max-w-96')){
            dialog.classList.add('max-w-96');
            dialog.classList.remove('max-w-[55rem]');
        }

        contentBox.appendChild(contentTitle);
        contentBox.appendChild(contentForm);
        dialogBody.appendChild(contentBox);
            
        renderInputs(inputArr, dialog, dialogBody);
        
        const btnLogin = Object.assign(document.createElement("button"), {type:"submit", className: "bg-gradient-orange text-white px-4 py-2 w-full rounded-lg mt-8", textContent: "Войти"});
        const btnRegistr = Object.assign(document.createElement("button"), {type:"button", className: "px-4 py-2 w-full rounded-lg border border-primary text-primary", textContent: "Регистрация"});

        btnRegistr.addEventListener('click', () => {
            window.location.href = '#';
        });
        
        const form = dialogBody.querySelector('form');

        form.addEventListener('submit', function(event) {
            // Проверяем валидность формы
            if (form.checkValidity()) {
                const data = getDataInput(form.querySelectorAll('input'));
                console.dir(data)
                dialog.close();
                dialogBody.innerHTML = '';
            }
        });

        const rowSaveInfo = Object.assign(document.createElement("div"), {className: "flex items-center gap-4 justify-between"});
        const cheakboxContainder = Object.assign(document.createElement("div"), {className: "flex gap-2 items-center"});
        const linkResetPassword = Object.assign(document.createElement("a"), {className: "font-Helvetica font-normal text-primary hover:text-primaryHover text-base", textContent: "Забыли пароль?", href: "#"});

        cheakboxContainder.appendChild(getCheakbox("saveAuthorization"));
        cheakboxContainder.appendChild(Object.assign(document.createElement("p"), {className: "font-Helvetica font-normal text-black text-base", textContent: "Запомнить меня"}));
        rowSaveInfo.appendChild(cheakboxContainder);
        rowSaveInfo.appendChild(linkResetPassword);

        form.appendChild(rowSaveInfo);
        form.appendChild(btnLogin);
        form.appendChild(btnRegistr);

    }else if(type === "registration"){
        const inputArr = [
            {
                type: "text",
                title: "Имя",
                inputName: "name",
                placeholder: "Иванов И.И.",
                isRequest: true
            },
            {
                type: "phone",
                title: "Телефон",
                inputName: "phone",
                placeholder: "+7 (999) 999 99 99",
                isRequest: true
            },
            {
                type: "email",
                title: "E-mail (логин)",
                inputName: "email",
                placeholder: "name@ya.ru",
                isRequest: true
            },
            {
                type: "password",
                title: "Пароль",
                inputName: "password",
                placeholder: "",
                isRequest: true
            },
            {
                type: "password",
                title: "Повторный пароль",
                inputName: "passwordRepeat",
                placeholder: "",
                isRequest: true
            },
        ];

        if(dialog.classList.contains('!max-w-96')){
            dialog.classList.add('max-w-96');
            dialog.classList.remove('max-w-[55rem]');
        }

        const contentBox = Object.assign(document.createElement("div"), {className: "flex flex-col gap-6"});
        const contentTitle = Object.assign(document.createElement("p"), {className: "font-Helvetica font-semibold text-xl text-black text-center", textContent: "Регистрация"});
        const contentForm = Object.assign(document.createElement("form"), {className: "flex flex-col gap-4", method: "dialog", action: "POST"});

        contentBox.appendChild(contentTitle);
        contentBox.appendChild(contentForm);
        dialogBody.appendChild(contentBox);

        renderInputs(inputArr, dialog, dialogBody);

        const form = dialogBody.querySelector('form');

        const btnRegistr = Object.assign(document.createElement("button"), {type:"submit", className: "bg-gradient-orange text-white px-4 py-2 w-full rounded-lg mt-8", textContent: "Войти"});

        btnRegistr.addEventListener('click', () => {

        });

        const rowSaveInfo = Object.assign(document.createElement("div"), {className: "flex items-center gap-4 justify-between"});
        const cheakboxContainder = Object.assign(document.createElement("div"), {className: "flex gap-2 items-center"});

        cheakboxContainder.appendChild(getCheakbox("saveAuthorization"));
        cheakboxContainder.appendChild(Object.assign(document.createElement("p"), {className: "font-Helvetica font-normal text-black text-base", textContent: "Запомнить меня"}));
        rowSaveInfo.appendChild(cheakboxContainder);


        form.addEventListener('submit', function(event) {
            // Проверяем валидность формы
            if (form.checkValidity()) {
                const data = getDataInput(form.querySelectorAll('input'));
                console.dir(data)
                dialog.close();
                dialogBody.innerHTML = '';
            }
        });

        form.appendChild(rowSaveInfo);
        form.appendChild(btnRegistr);

        // init phone mask
        const inputs = document.querySelectorAll('[type="tel"]');
        const maskOptions = {
            mask: '+{7} (000) 000-00-00'
        };
        inputs.forEach(element => {
            IMask(element, maskOptions);
        });
        
    }else if(type === "consultation"){
        const inputArr = [
            {
                type: "text",
                title: "Имя",
                inputName: "name",
                placeholder: "",
                isRequest: true
            },
            {
                type: "phone",
                title: "Телефон",
                inputName: "phone",
                placeholder: "+7 (999) 999 99 99",
                isRequest: true
            },
            {
                type: "email",
                title: "e-mail",
                inputName: "email",
                placeholder: "",
                isRequest: false
            },
        ];

        if(dialog.classList.contains('!max-w-96')){
            dialog.classList.add('max-w-96');
            dialog.classList.remove('max-w-[55rem]');
        }

        const contentBox = Object.assign(document.createElement("div"), {className: "flex flex-col gap-6"});
        const contentForm = Object.assign(document.createElement("form"), {className: "flex flex-col gap-4", method: "dialog", action: "POST"});
        contentBox.appendChild(contentForm);
        dialogBody.appendChild(contentBox);
            
        renderInputs(inputArr, dialog, dialogBody);
        
        const btnLogin = Object.assign(document.createElement("button"), {type:"submit", className: "bg-gradient-orange text-white px-4 py-2 w-full rounded-lg mt-8", textContent: "Получить консультацию"});
        
        const form = dialogBody.querySelector('form');

        form.addEventListener('submit', function(event) {
            // Проверяем валидность формы
            if (form.checkValidity()) {
                const data = getDataInput(form.querySelectorAll('input'));
                console.dir(data)
                dialog.close();
                dialogBody.innerHTML = '';
            }
        });

        form.appendChild(btnLogin);
        // init phone mask
        const inputs = document.querySelectorAll('[type="tel"]');
        const maskOptions = {
            mask: '+{7} (000) 000-00-00'
        };
        inputs.forEach(element => {
            IMask(element, maskOptions);
        });
    }else if(type ==="bid"){
        const inputArr = [
            {
                type: "text",
                title: "Наименование организации",
                inputName: "companyName",
                placeholder: "",
                isRequest: true
            },
            {
                type: "text",
                title: "Имя",
                inputName: "name",
                placeholder: "",
                isRequest: true
            },
            {
                type: "phone",
                title: "Телефон",
                inputName: "phone",
                placeholder: "+7 (999) 999 99 99",
                isRequest: true
            },
            {
                type: "email",
                title: "e-mail",
                inputName: "email",
                placeholder: "",
                isRequest: false
            },
            {
                type: "textarea",
                title: "Комментарий",
                inputName: "comment",
                placeholder: "",
                isRequest: false
            },
        ];
        const contentBox = Object.assign(document.createElement("div"), {className: "flex flex-col gap-6"});
        const contentForm = Object.assign(document.createElement("form"), {className: "flex flex-col gap-4", method: "dialog", action: "POST"});

        contentBox.appendChild(contentForm);
        dialogBody.appendChild(contentBox);
        
        if(dialog.classList.contains('!max-w-96')){
            dialog.classList.add('max-w-96');
            dialog.classList.remove('max-w-[55rem]');
        }

        renderInputs(inputArr, dialog, dialogBody);
        
        const btnLogin = Object.assign(document.createElement("button"), {type:"submit", className: "bg-gradient-orange text-white px-4 py-2 w-full rounded-lg mt-8", textContent: "Оставить заявку"});
        
        const form = dialogBody.querySelector('form');

        form.addEventListener('submit', function(event) {
            // Проверяем валидность формы
            if (form.checkValidity()) {
                const data = getDataInput(form.querySelectorAll('input, textarea'));
                console.dir(data)
                dialog.close();
                dialogBody.innerHTML = '';
            }
        });

        form.appendChild(btnLogin);
        // init phone mask
        const inputs = document.querySelectorAll('[type="tel"]');
        const maskOptions = {
            mask: '+{7} (000) 000-00-00'
        };
        inputs.forEach(element => {
            IMask(element, maskOptions);
        });
    }else if(type === "authorInfo"){
        const authorId = btn.getAttribute('author-id');
        if(!authorId) return;
        debugger
        if(dialog.classList.contains('max-w-96')){
            dialog.classList.remove('max-w-96');
            dialog.classList.add('max-w-[55rem]');
        }

        const authorInfo = author.find(item => item.id === Number(authorId));

        const contentBox = Object.assign(document.createElement("div"), {className: "flex flex-col gap-6"});
        const title = Object.assign(document.createElement("p"), {className: "font-Helvetica font-semibold text-xl text-black", textContent: authorInfo.title});
        const description = Object.assign(document.createElement("p"), {className: "font-Helvetica font-medium text-base text-secondary", textContent: authorInfo.description});
        contentBox.appendChild(title);
        contentBox.appendChild(description);
        dialogBody.appendChild(contentBox);

        const policy = dialog.querySelector('[dialogPolicy]');
        const logo = dialog.querySelector('[dialoglogo]');
        policy.classList.add('hidden');
        logo.classList.add('hidden');
    }else{
        const policy = dialog.querySelector('[dialogPolicy]');
        policy.classList.add('hidden');
        if(dialog.classList.contains('!max-w-96')){
            dialog.classList.add('max-w-96');
            dialog.classList.remove('max-w-[55rem]');
        }
    }
}

const getCheakbox = (cheakboxName) => {
    const cheakbox = Object.assign(document.createElement("label"), {className: "relative inline-block w-5 h-5 group"});
    const cheakboxInput = Object.assign(document.createElement("input"), {className: "opacity-0 w-0 h-0 peer", type: "checkbox", name: cheakboxName});
    const cheakboxMask = Object.assign(document.createElement("span"), {className: "absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-white transition-all duration-400 border border-gray-400 rounded-[0.38rem] group-hover:border-success-500 group-hover:bg-success-100 peer-checked:border-success-500 peer-checked:bg-success-25 peer-focus:shadow-custom-7 peer-focus:bg-white peer-focus:ring-opacity-50 peer-disabled:border-gray-400 peer-disabled:bg-gray-100"});
    const cheakboxSelect = Object.assign(document.createElement("span"), {className: "absolute top-0 left-0 cursor-pointer w-full h-full hidden peer-checked:icon-filter-success-500 peer-disabled:icon-filter-gray-500 peer-checked:flex peer-checked:items-center peer-checked:justify-center"});
    const cheakboxSelectSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    cheakboxSelectSvg.setAttribute("width", "16");
    cheakboxSelectSvg.setAttribute("height", "16");
    cheakboxSelectSvg.setAttribute("viewBox", "0 0 14 14");
    cheakboxSelectSvg.setAttribute("fill", "none");
    const cheakboxSelectPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    cheakboxSelectPath.setAttribute("d", "M11.6668 3.5L5.25016 9.91667L2.3335 7");
    cheakboxSelectPath.setAttribute("stroke", "#fd7e14");
    cheakboxSelectPath.setAttribute("strokeWidth", "4");
    cheakboxSelectPath.setAttribute("strokeLinecap", "round");
    cheakboxSelectPath.setAttribute("strokeLinejoin", "round");

    cheakboxSelectSvg.appendChild(cheakboxSelectPath);
    cheakboxSelect.appendChild(cheakboxSelectSvg);
    cheakbox.appendChild(cheakboxInput);
    cheakbox.appendChild(cheakboxMask);
    cheakbox.appendChild(cheakboxSelect);
    return cheakbox;
}
const getDataInput = (inputs) =>{
    const res = {}
    inputs.forEach(item => {
        if(item.type === "checkbox"){
            res[item.getAttribute("name")] = item.value === "on"? true : false;
        }else if(item.type === "textarea"){
            res[item.getAttribute("textareaName")] = item.value;
        }
        else{
            res[item.getAttribute("inputName")] = item.value;
        }
    })
    return res;
}
const renderInputs = (inputs, dialog, body) => {
    // обращаемся к шаблону
    const templateInput = dialog.querySelector('[dialogInputTemplate]');
    const templateTextarea = dialog.querySelector('[dialogTextareaTemplate]');
    const form = body.querySelector('form');
    if(!form || !templateInput || !templateTextarea) return;

    inputs.forEach(item => {
        if(item.type === "textarea"){
            // Клонируем
            const inputItem = templateTextarea.content.cloneNode(true)
            const text = inputItem.querySelector('p');
            const input = inputItem.querySelector('textarea');
    
            text.textContent = item.title;
            if(item.isRequest){
                const requestInfo = Object.assign(document.createElement("span"), {className: "text-red-600 ml-1 text-base"});
                requestInfo.textContent = "*";
                text.appendChild(requestInfo);
                input.setAttribute('required', 'true');
            }
            input.placeholder = item.placeholder;
            input.setAttribute('textareaName', item.inputName)
    
            form.append(inputItem)
        }else{

            // Клонируем
            const inputItem = templateInput.content.cloneNode(true)
            const text = inputItem.querySelector('p');
            const input = inputItem.querySelector('input');
    
            text.textContent = item.title;
            if(item.isRequest){
                const requestInfo = Object.assign(document.createElement("span"), {className: "text-red-600 ml-1 text-base"});
                requestInfo.textContent = "*";
                text.appendChild(requestInfo);
                input.setAttribute('required', 'true');
            }
            if(item.type === "phone"){
                input.type = "tel";
            }
            input.placeholder = item.placeholder;
            input.setAttribute('inputName', item.inputName)
    
            form.append(inputItem)
        }
    })
}
