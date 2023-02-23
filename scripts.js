const handleBurgerMenu = () => {
    var bg = document.querySelector('#main_content')
    console.log('clock');
    if (bg.className === "main_content") {
        bg.className = "main_content_white"
    } else { bg.className = "main_content" }
} 

