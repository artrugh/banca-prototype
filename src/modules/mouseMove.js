// this function is apply in the the active nav, when it the mousemove out of it
// basically it hide the menu-icon
export const mouseMove = e => {
    const elementWidth = nav.getBoundingClientRect().width;
    const limit = window.innerWidth - elementWidth;
    //if the event is applied out of the nav
    if (elementWidth > 10 && e.pageX < limit) {
        menu.className = "hidden";
    } else if (cart.className === "cart active") {
        menu.classList.add("transparent");
    } else {
        menu.className = "visible";
    }
};