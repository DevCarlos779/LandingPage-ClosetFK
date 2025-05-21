const onToggleMenu = (e) => {
    const nav_links = document.querySelector(".nav-links");

    if(e.name == "close") {
        e.name = "menu";
    } else {
        e.name = "close";
    }

    nav_links.classList.toggle("top-25");
    
}