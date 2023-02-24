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
        div.className= "forMob_after"
        line.forEach((line) => line.className  = "burger_line_after")

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
        div.className= "forMob"

        line.forEach((line) => line.className  = "burger_line")

    }
}

