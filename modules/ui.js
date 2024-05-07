export function create_header() {
    
    const header = document.createElement('header')
    header.className = 'header'
    
    const up = document.createElement('div')
    up.classList = 'up'
    
    const logo = document.createElement('img')
    logo.src = '/public/img/logo.png'
    
    const messangers = document.createElement('div')
    messangers.className = 'messangers'
    
    const flex = document.createElement('div')
    flex.className = 'flex'
    
    const our_messangers = document.createElement('p')
    our_messangers.innerHTML = 'Наши мессенджеры'
    
    const img_messangers = document.createElement('img')
    img_messangers.src = '/public/img/messangers.png'
    
    const email = document.createElement('div')
    email.className = 'email'
    
    const email_img = document.createElement('img')
    email_img.src = '/public/svg/email.svg'
    
    const email_p = document.createElement('p')
    email_p.innerText = 'info@poland24.com.ua'
    
    const money = document.createElement('div')
    money.className = 'money'
    
    const one_money = document.createElement('div')
    one_money.classList.add('one')
    
    const h4_one = document.createElement('h4')
    h4_one.innerText = 'zł'
    
    const p_one = document.createElement('p')
    p_one.innerText = '00,00'
    
    const two_money = document.createElement('div')
    two_money.className = 'two'
    
    const h4_two = document.createElement('h4')
    h4_two.innerHTML = '€'
    
    const p_two = document.createElement('p')
    p_two.innerText = '00,00'
    
    const apliences = document.createElement('div')
    apliences.className = 'apliences'
    
    const place_order__apliences = document.createElement('button')
    place_order__apliences.className = 'place_order'
    place_order__apliences.innerText = 'Оформить заказ'
    
    const sign_apliences = document.createElement('button')
    sign_apliences.className = 'sign'
    sign_apliences.innerHTML = 'Вход/Реестрация'
    
    const country_apliences = document.createElement('div')
    country_apliences.className = 'country'
    
    const img_country = document.createElement('img')
    img_country.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQay6rtQG9Mup3tUiOfYF_xe-2pIHcIrI3bQf67rVItPl318-Ujp6n7Wh7Ikz4Nur0K6-4&usqp=CAU'
    
    const p_country = document.createElement('p')
    p_country.innerHTML = 'Germany'
    
    const down = document.createElement('div')
    down.className = 'down'
    
    const help_with_searching_down = document.createElement('div')
    help_with_searching_down.className = 'help_with_searching'
    
    const img_help_with_searching = document.createElement('img')
    img_help_with_searching.src = '/public/svg/quastion.svg'
   
    const dialog = document.createElement('dialog');
    dialog.classList.add('sign_in');
    
    const head = document.createElement('div');
    head.classList.add('head');
   
    const heading = document.createElement('h1');
    heading.textContent = 'Вход';
    
    const closeButton = document.createElement('img');
    closeButton.src = '/public/svg/close.svg';
    closeButton.classList.add('x');
    
    const questionPara = document.createElement('p');
    questionPara.classList.add('question');
    questionPara.innerHTML = 'У вас еще нету аккаунта ? <span class="offer">Зарегистрируйтесь</span>';
    
    const btnsOfApps = document.createElement('div');
    btnsOfApps.classList.add('btns_of_apps');
    
    const googleBtn = document.createElement('button');
    googleBtn.classList.add('btn');
    googleBtn.id = 'one';
    googleBtn.innerHTML = '<img src="/public/svg/google.svg" alt=""> Google';

    const facebookBtn = document.createElement('button');
    facebookBtn.classList.add('btn');
    facebookBtn.id = 'two';
    facebookBtn.innerHTML = '<img src="/public/svg/facebook.svg" alt=""> Facebook';

    const signInForm = document.createElement('form');
    signInForm.classList.add('signin');
    signInForm.name = 'signin';
    
    const emailInput = document.createElement('input');
    emailInput.placeholder = 'Введите е-mail';
    emailInput.classList.add('checking_account');
    emailInput.name = 'email';
    emailInput.type = 'email';
    
    const passwordInput = document.createElement('input');
    passwordInput.placeholder = 'Введиите пароль';
    passwordInput.classList.add('checking_account');
    passwordInput.name = 'password';
    passwordInput.type = 'password';
    
    const flexDiv = document.createElement('div');
    flexDiv.classList.add('flex');
    
    const equalityDiv = document.createElement('div');
    equalityDiv.classList.add('equality');
    
    const rememberCheckbox = document.createElement('input');
    rememberCheckbox.id = 'check2';
    rememberCheckbox.name = 'checkbox'
    rememberCheckbox.type = 'checkbox';
    
    const rememberPara = document.createElement('p');
    rememberPara.textContent = 'Запомнить меня';
    
    const forgotPasswordPara = document.createElement('p');
    forgotPasswordPara.classList.add('forgot_password');
    forgotPasswordPara.textContent = 'Забыли пароль?';
    
    const enterButton = document.createElement('button');
    enterButton.classList.add('enter');
    enterButton.textContent = 'Войти';
    
    const dialog2 = document.createElement('dialog');
    dialog2.classList.add('sign_up');

    const head2 = document.createElement('div');
    head2.classList.add('head');

    const heading2 = document.createElement('h1');
    heading2.textContent = 'Регистрация';
    head2.appendChild(heading2);

    const closeButton2 = document.createElement('img');
    closeButton2.src = '/public/svg/close.svg';
    closeButton2.classList.add('x');
    head2.appendChild(closeButton2);

    dialog2.appendChild(head2);

    const questionPara2 = document.createElement('p');
    questionPara2.classList.add('question');
    questionPara2.innerHTML = `У вас уже есть аккаунт ? <span id="enter_90"  class="offer">Войдите</span>`
    dialog2.appendChild(questionPara2);

    const btnsOfApps2 = document.createElement('div');
    btnsOfApps2.classList.add('btns_of_apps');

    const googleBtn2 = document.createElement('button');
    googleBtn2.classList.add('btn');
    googleBtn2.id = 'one';
    googleBtn2.innerHTML = '<img src="/public/svg/google.svg" alt=""> Google';
    btnsOfApps2.appendChild(googleBtn2);

    const facebookBtn2 = document.createElement('button');
    facebookBtn2.classList.add('btn');
    facebookBtn2.id = 'two';
    facebookBtn2.innerHTML = '<img src="/public/svg/facebook.svg" alt=""> Facebook';
    btnsOfApps2.appendChild(facebookBtn2);

    dialog2.appendChild(btnsOfApps2);

    const signUpForm2 = document.createElement('form');
    signUpForm2.classList.add('signup');
    signUpForm2.name = 'signup';

    const nameInput2 = document.createElement('input');
    nameInput2.placeholder = 'Имя фамилия';
    nameInput2.classList.add('registing_account');
    nameInput2.name = 'name';
    nameInput2.type = 'text';
    signUpForm2.appendChild(nameInput2);

    const emailInput2 = document.createElement('input');
    emailInput2.placeholder = 'Е-mail / Логин';
    emailInput2.classList.add('registing_account');
    emailInput2.name = 'email';
    emailInput2.type = 'email';
    signUpForm2.appendChild(emailInput2);

    const phoneNumberInput2 = document.createElement('input');
    phoneNumberInput2.placeholder = 'Номер телефона';
    phoneNumberInput2.classList.add('registing_account');
    phoneNumberInput2.name = 'surname';
    phoneNumberInput2.type = 'text';
    signUpForm2.appendChild(phoneNumberInput2);

    const passwordInput2 = document.createElement('input');
    passwordInput2.placeholder = 'Пароль';
    passwordInput2.classList.add('registing_account');
    passwordInput2.name = 'password';
    passwordInput2.type = 'password';
    signUpForm2.appendChild(passwordInput2);

    const confirmPasswordInput2 = document.createElement('input');
    confirmPasswordInput2.placeholder = 'Повторить пароль';
    confirmPasswordInput2.classList.add('registing_account');
    confirmPasswordInput2.name = 'password';
    confirmPasswordInput2.type = 'password';
    signUpForm2.appendChild(confirmPasswordInput2);

    const flexDiv2 = document.createElement('div');
    flexDiv2.classList.add('flex');

    const equalityDiv2 = document.createElement('div');
    equalityDiv2.classList.add('equality');

    const agreeCheckbox2 = document.createElement('input');
    agreeCheckbox2.id = 'check';
    agreeCheckbox2.name = 'checkbox'
    agreeCheckbox2.type = 'checkbox';
    equalityDiv2.appendChild(agreeCheckbox2);

    const agreementPara2 = document.createElement('p');
    agreementPara2.textContent = 'согласен с публичным договором предоставлния услуг';
    equalityDiv2.appendChild(agreementPara2);

    flexDiv2.appendChild(equalityDiv2);
    signUpForm2.appendChild(flexDiv2);

    // Create submit button
    const registerButton2 = document.createElement('button');
    registerButton2.classList.add('regist');
    registerButton2.textContent = 'Войти';
    signUpForm2.appendChild(registerButton2);

    dialog2.appendChild(signUpForm2);

    const links = ['О компании', 'Список магазинов', 'Отзывы', 'Вопрос-ответ', 'Калькулятор', 'Контакты'];
    links.forEach(linkText => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = linkText;
        down.append(link);
    })

    help_with_searching_down.append(img_help_with_searching, 'Помощь в поиске товаров')
    down.append(help_with_searching_down)
    country_apliences.append(img_country, p_country)
    apliences.append(place_order__apliences, sign_apliences, country_apliences)
    one_money.append(h4_one, p_one)
    two_money.append(h4_two, p_two)
    money.append(one_money, two_money)
    email.append(email_img, email_p)
    flex.append(our_messangers, img_messangers)
    messangers.append(flex, email)
    up.append(logo, messangers, money,  apliences)
    header.append(up, down)
    head.append(heading, closeButton)
    btnsOfApps.append(googleBtn, facebookBtn)
    signInForm.append(emailInput, passwordInput)
    equalityDiv.append(rememberCheckbox, rememberPara)
    flexDiv.append(equalityDiv, forgotPasswordPara)
    signInForm.append(flexDiv, enterButton)
    dialog.append(head, questionPara, btnsOfApps, signInForm)
    document.body.prepend(header, dialog, dialog2)

    sign_apliences.onclick = () => {
        dialog.showModal()
    }
    closeButton.onclick = () => {
        dialog.close()
    }
    const offers = document.querySelectorAll('.offer')
    
    offers.forEach(offer => {
        offer.onclick = () => {
            if(offer.id === 'enter_90'){
                dialog2.close()
                dialog.showModal()
            }else{
                dialog.close()
                dialog2.showModal()
            }
        }
    })
    closeButton2.onclick = () => {
        dialog2.close()
    }

const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {};
    formData.forEach((val, key) => obj[key] = val);
    console.log(obj);
};

signInForm.onsubmit = handleFormSubmit;
signUpForm2.onsubmit = handleFormSubmit;

}