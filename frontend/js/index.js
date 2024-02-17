import { reload, reload_2 } from "./ui.js"
let link = 'http://localhost:8090/todos'

let btn_adding_task = document.querySelector('#add_task')
let dialog = document.querySelector('dialog')
let close = document.querySelector('.close')
dialog.style.display = 'none'
btn_adding_task.onclick = () => {
    dialog.showModal()
    dialog.style.display = 'block'
}
close.onclick = () => {
    dialog.close()
    dialog.style.display = 'none'
}
const form = document.forms.add
form.onsubmit = (e) => {
    let activities = {
        Header: new FormData(form).get('header'),
        Description: new FormData(form).get('description'),
        Time: new FormData(form).get('time'),
        Day: new FormData(form).get('day'),
        Type_of_task: new FormData(form).get('type_of_task')
    }
    fetch(link, {
        method:'post',
        body: JSON.stringify(activities),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
}
let wrap = document.querySelector('.three .wrap')
let types_of_site = document.querySelectorAll('.type')
let prev = 0
types_of_site.forEach((type, idx) => {
    types_of_site[prev].classList.add('active')
    fetch(link)
            .then(res => res.json())
            .then(res =>  reload(res,wrap))
    type.onclick = () => {
        types_of_site[prev].classList.remove('active')
        type.classList.add('active')
        prev = idx
        if(type.id === 'table_table'){
            fetch(link)
            .then(res => res.json())
            .then(res =>  reload(res,wrap))
        } else {
            fetch(link)
            .then(res => res.json())
            .then(res => reload_2(res, wrap))
        }
    }

})