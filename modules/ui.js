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
    document.body.prepend(header)
}