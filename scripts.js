const handleBurgerMenu = () => {
    let bg = document.querySelector('#container')
    let main = document.querySelector('#main_content')
    let phone_number = document.querySelector('#number')
    let phone_order = document.querySelector('#phone_order_text')
    let phone_text = document.querySelector('#phone_text')
    let over_links = document.querySelector('#over_links')
    let div = document.querySelector('#forMob')
    let line = document.querySelectorAll(".burger_line")
    let menu = document.querySelector(".menu")
    let link = document.querySelector('#link_to_main')
    if (bg.className === "container") {
        bg.className = "container_after"
        main.className = "main_content_after"
        phone_number.className = 'number_after'
        phone_order.className = 'phone_order_text_after'
        phone_text.className = 'phone_text_after'
        menu.className = 'menu_after'
        link.className = "forHide"
        over_links.className = "over_links_after"
        div.className = "forMob_after"
        line.forEach((line) => line.className = "burger_line_after")

    } else {
        let menu = document.querySelector(".menu_after")
        let line = document.querySelectorAll(".burger_line_after")

        link.className = "menu_element"
        over_links.className = "over_links"
        bg.className = "container"
        main.className = "main_content"
        phone_number.className = 'number'
        phone_order.className = 'phone_order_text'
        phone_text.className = 'phone_text'
        menu.className = 'menu'
        div.className = "forMob"

        line.forEach((line) => line.className = "burger_line")

    }
}
const handlePolicy = () => {
    let policy_submit = document.querySelector('#policy_submit')
    let button = document.querySelector('#submit_btn')
    let input = document.querySelector('.form_phone_number')
    console.log(input.value.length)
    if (policy_submit.checked  && input.value.length && input.value[17] !== '_') {
        button.className = "form_submit_button"
    } else {
        button.className = "form_submit_button_false"
    }
}
const submitForm = () => {
    let res = document.querySelector('.res')
    let form = document.querySelector('.form')
    res.className = "forHide"
    let div = document.createElement('div')
    div.textContent = "отправлено"
    div.style = 'color: green'
    form.appendChild(div)
}

const handlePop = () => {
    let form = document.querySelector('#form')
    if (form.className === "form") {
        form.className = 'forHide'
    } else {
        form.className = 'form'

    }
}
const handleMap = () => {
    let frame = document.querySelector('#frame')
    if(frame.className === 'forHide') {
        frame.className = 'frame'
    } else {
        frame.className = 'forHide'

    }
}
//      ||
// сюда \/ не обращайте внимания, просто взял готовый код для инпута номера(много лишнего)
document.addEventListener('DOMContentLoaded', () => {
    for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
        const pattern = el.getAttribute("placeholder"),
            slots = new Set(el.dataset.slots || "_"),
            prev = (j => Array.from(pattern, (c, i) => slots.has(c) ? j = i + 1 : j))(0),
            first = [...pattern].findIndex(c => slots.has(c)),
            accept = new RegExp(el.dataset.accept || "\\d", "g"),
            clean = input => {
                input = input.match(accept) || [];
                return Array.from(pattern, c =>
                    input[0] === c || slots.has(c) ? input.shift() || c : c
                );
            },
            format = () => {
                const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
                    i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
                    return i < 0 ? prev[prev.length - 1] : back ? prev[i - 1] || first : i;
                });
                el.value = clean(el.value).join``;
                el.setSelectionRange(i, j);
                back = false;
            };
        let back = false;
        el.addEventListener("keydown", (e) => back = e.key === "Backspace");
        el.addEventListener("input", format);
        el.addEventListener("focus", format);
        el.addEventListener("blur", () => el.value === pattern && (el.value = ""));
    }
});