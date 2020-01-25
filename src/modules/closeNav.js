// this function manage the opacity of the header buttons - signup login cart menuicon
const manageButtons = () => {

    //variable
    nav.classList.remove("active");
    cart.classList.remove("active");

    //return the content to opacity 1
    content.classList.remove("transparent");

    // return the bottoms to opacity 1
    signup.classList.remove("transparent");
    login.classList.remove("transparent");
    carticon.classList.remove("transparent");
    menu.classList.remove("transparent");
    carticon.classList.remove("transparent");

    // the menu opacity 1 again
    menu.className = "visible";
    
    // we sure the menu Icon is setted in the correct position
    const menuIcon = document.querySelectorAll(".bar");
    [...menuIcon].map(bar => bar.classList.remove("diagonal"));
}

// function which close the Nav Component or the Cart Component, each time the body is clicked
export const closeNav = e => {

    // check if the area clicked is outside the component 
    const navWidth = nav.getBoundingClientRect().width;
    const cartWidth = cart.getBoundingClientRect().width;
    const limitNav = window.innerWidth - navWidth;
    const limitCart = window.innerWidth - cartWidth;
    
    navWidth > 4 ? e.pageX < limitNav ? manageButtons() : null:null;
    cartWidth > 4 ? e.pageX < limitCart ? manageButtons() : null:null;
};
