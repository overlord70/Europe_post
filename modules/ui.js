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
    const money = document.createElement('div')
    const one_money = document.createElement('div')
    const h4_one = document.createElement('h4')
    const p_one = document.createElement('p')
    const two_money = document.createElement('div')
    const h4_two = document.createElement('h4')
    const p_two = document.createElement('p')
    const apliences = document.createElement('div')
    const place_order__apliences = document.createElement('button')
    const sign_apliences = document.createElement('button')
    const country_apliences = document.createElement('div')
    const img_country = document.createElement('img')
    const p_country = document.createElement('p')
    const down = document.createElement('div')
    const help_with_searching_down = document.createElement('div')
    const img_help_with_searching = document.createElement('img')
    
    const links = ['О компании', 'Список магазинов', 'Отзывы', 'Вопрос-ответ', 'Калькулятор', 'Контакты'];
    links.forEach(linkText => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = linkText;
        down.append(link);
    })
    help_with_searching_down.prepend(img_help_with_searching)
    down.append(help_with_searching_down)
    country_apliences.append(img_country, p_country)
    apliences.append(place_order__apliences, sign_apliences, country_apliences)
    one_money.append(h4_one, p_one)
    two_money.append(h4_two, p_two)
    money.append(one_money, two_money)
    email.append(email_img, email_p)
    flex.append(our_messangers, img_messangers)
    messangers.append(flex, email)
    up.append(logo, messangers, money, apliences)
    header.append(up, down)
    document.body.prepend(header)
}