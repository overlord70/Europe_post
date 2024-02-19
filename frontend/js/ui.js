import { link, wrap } from "./index.js";
let edit_id 
export function reload(arr,place) {
    place.innerHTML = ''
    // a
    let table =document.createElement('table')
    let tr = document.createElement('tr')
    let td_1 = document.createElement('td')
    let td_2 = document.createElement('td')
    let td_3 = document.createElement('td')
    let td_4 = document.createElement('td')
    let td_5 = document.createElement('td')
    // b
    table.id = 'table'
    tr.id = 'first_line'
    td_1.innerHTML = 'Заголовок задачи'
    td_2.innerHTML = 'Описание задачи'
    td_2.classList.add('text')
    td_3.innerHTML = 'Дата'
    td_4.innerHTML = 'Время'
    td_5.innerHTML = 'Выполнено'
    // c
    tr.append(td_1, td_2, td_3, td_4, td_5)
    table.append(tr)
    for (const item of arr) {
        // a
        let tr = document.createElement('tr')
        let div = document.createElement('div')
        let td_1 = document.createElement('td')
        let td_2 = document.createElement('td')
        let td_3 = document.createElement('td')
        let td_4 = document.createElement('td')
        let td_5 = document.createElement('td')
        // b
        td_1.innerHTML = item.Header
        td_2.innerHTML = item.Description
        div.classList.add('text')
        td_3.innerHTML = item.Day
        td_4.innerHTML = item.Time
        td_5.innerHTML = item.Type_of_task
        // c
        div.append(td_2)
        tr.append(td_1, div,td_3,td_4,td_5)
        table.append(tr)
        place.append(table)
        // d
        delete_and_change(item.id,tr)
    }
}
export function reload_2(arr,place) {
    place.innerHTML = ''
    let div = document.createElement('div')
    div.classList.add('grid')
    for(const item of arr){
        // a
        let div_1 = document.createElement('div')
        let h2 = document.createElement('h2')
        let p_1 = document.createElement('p')
        let div_2 = document.createElement('div')
        let p_2 = document.createElement('p')
        let p_3 = document.createElement('p')
        let p_4 = document.createElement('p')
        // b
        div_1.classList.add('width')
        h2.innerHTML = item.Header
        h2.style.marginBottom = '20px'
        p_1.innerHTML = item.Description
        div_2.classList.add('flex_time')
        p_2.innerHTML = item.Time
        p_3.innerHTML = item.Day
        p_4.innerHTML = item.Type_of_task
        // c
        div_2.append(p_2, p_3)
        div_1.append(h2, p_1, div_2, p_4)
        div.append(div_1)
        place.append(div)
        // d
        delete_and_change(item.id,div)
    }
}

function delete_and_change(id, place) {
    let dialog_2 = document.querySelector('.replacement')
let close_2 = document.querySelector('.close_second')
let btn = document.querySelector('.form_btn_1')
let btn_delete = document.querySelector('.form_btn_2')
const form_2 = document.forms.change_or_delete
close_2.onclick = () => {
    dialog_2.close()
}
place.ondblclick = () => {
    dialog_2.showModal()
    edit_id = id
    console.log(edit_id);
}
btn.onclick = () => {
    let changes = {
        Header: new FormData(form_2).get('header'),
        Description: new FormData(form_2).get('description'),
        Time: new FormData(form_2).get('time'),
        Day: new FormData(form_2).get('day'),
        Type_of_task: new FormData(form_2).get('type_of_task')
    }
    fetch(link + '/' + edit_id, {
        method: 'put',
        body: JSON.stringify(changes),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => reload(res, wrap))
}
btn_delete.onclick = () => {
    fetch(link + '/' + edit_id, {
        method: 'delete',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => reload(res, wrap))
}
}