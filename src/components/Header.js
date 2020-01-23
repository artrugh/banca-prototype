const manageMenuButtons = oppositeElement => {

    // change the opacity of some buttons
    if (nav.className === 'nav active' || cart.className === 'cart active') {
        content.classList.add("transparent");
        signup.classList.add("transparent");
        login.classList.add("transparent");

        oppositeElement.classList.add("transparent");
    } else {
        content.classList.remove("transparent");
        signup.classList.remove("transparent");
        login.classList.remove("transparent");

        oppositeElement.classList.remove("transparent");
    }
}

export const Header = (fixedPositionScroll, Logo) => {

    //didMount
    //after the ui is already mounted
    setTimeout(() => {
        // menu onclick event
        menu.onclick = () => {
            // toggle the position of the menu bar when it is clicked - an animation is displayed
            const menuIcon = document.querySelectorAll(".bar");
            [...menuIcon].map(bar => bar.classList.toggle("diagonal"));

            // togle the nav
            nav.classList.toggle("active");
            // close the cart
            cart.classList.remove("active");
            // manage menu bottons
            manageMenuButtons(carticon);
        }

        carticon.onclick = () => {
            // remove diagonal class of the menu bar when it is clicked - an animation is displayed
            const menuIcon = document.querySelectorAll(".bar");
            [...menuIcon].map(bar => bar.classList.remove("diagonal"));

            // toggle the cart
            cart.classList.toggle("active");

            // close the nav
            nav.classList.remove("active");

            // when the icon is clicked take out the transparency
            carticon.classList.remove("transparent");

            // toggle the user bottons
            signup.classList.toggle("transparent");
            login.classList.toggle("transparent");

            // manageMenuBottons
            manageMenuButtons(menu);
        };

        // sing up event
        signup.onclick = (e) => {

            signup.classList.remove("transparent");

            // close cart and nav
            cart.classList.remove("active");
            nav.classList.remove("active");
            // first fixed the container and hidde it and then display the forms
            fixedPositionScroll(e);
            setTimeout(() => { signform.style.display = "block" }, 20);
        }
        // login event
        login.onclick = (e) => {
            login.classList.remove("transparent");

            // close cart and nav
            cart.classList.remove("active");
            nav.classList.remove("active");
            
            fixedPositionScroll(e);
            setTimeout(() => { logform.style.display = "block" }, 20)
        }
        // hover logo
        logo.onmouseover = () => logo.style.fill = "#f6f6f6";
        logo.onmouseleave = () => logo.style.fill = "#a18a57";
    })

    return `
    <div id = "header">
        <a href = "#empresa">
            ${Logo}
        </a>
        <div id = "container-menu">
            <button id = "signup" >rigistrarse</button>/
            <button id = "login" class = "user-botton">inicia sesión</button>
            <button id = "carticon" class = "user-botton">
            <span id = "counter-cart" class = "user-botton"></span>
                <svg class = "svg-cart" x="0px" y="0px"  viewBox="0 0 226 226">
                    <path class = "path-cart" d="M0,226v-226h226v226z"/>
                    <path d="M15.06667,15.06667c-2.71679,-0.03842 -5.24381,1.38896 -6.61342,3.73558c-1.36961,2.34661 -1.36961,5.2489 0,7.59552c1.36961,2.34661 3.89663,3.774 6.61342,3.73558h14.15443c1.7018,0 3.12184,1.06569 3.60482,2.70729l32.10495,109.14505c2.81772,9.58025 11.67869,16.21432 21.67305,16.21432h82.6901c10.15807,0 19.12714,-6.86518 21.80547,-16.65573l19.56901,-71.75794c0.61904,-2.26585 0.14588,-4.69077 -1.27956,-6.55769c-1.42544,-1.86692 -3.64004,-2.96221 -5.98893,-2.96197h-146.79701l-9.31367,-31.67826c-0.0049,0 -0.00981,0 -0.01471,0c-2.34958,-7.986 -9.73598,-13.52174 -18.05352,-13.52174zM90.4,173.26667c-8.32109,0 -15.06667,6.74558 -15.06667,15.06667c0,8.32109 6.74558,15.06667 15.06667,15.06667c8.32109,0 15.06667,-6.74558 15.06667,-15.06667c0,-8.32109 -6.74558,-15.06667 -15.06667,-15.06667zM165.73333,173.26667c-8.32109,0 -15.06667,6.74558 -15.06667,15.06667c0,8.32109 6.74558,15.06667 15.06667,15.06667c8.32109,0 15.06667,-6.74558 15.06667,-15.06667c0,-8.32109 -6.74558,-15.06667 -15.06667,-15.06667z"/>
                    <path class = "path-cart" d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113h0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z"/>
                    <path class = "path-cart" d="M113,221.48c-59.91185,0 -108.48,-48.56815 -108.48,-108.48v0c0,-59.91185 48.56815,-108.48 108.48,-108.48v0c59.91185,0 108.48,48.56815 108.48,108.48v0c0,59.91185 -48.56815,108.48 -108.48,108.48z"/>
                    <path class = "path-cart" d="M0,226v-226h226v226z"/>
                    <path class = "path-cart" d="M4.52,221.48v-216.96h216.96v216.96z"/>
                </svg>
            </button>   
            <div id = "menu" class = "visible">
                <svg class ="inline-svg" x="0px" y="0px" viewBox="0 0 100 100">
                    <g class ="svg-menu-toggle">
                        <line id="XMLID_1_"  class = "bar" x1="2.8" y1="2.7" x2="97.2" y2="2.7" />
                        <line id="XMLID_2_"  class = "bar" x1="2.8" y1="49.9" x2="97.2" y2="49.9" />
                        <line id="XMLID_3_"  class = "bar" x1="2.8" y1="97" x2="97.2" y2="97" />
                    </g>
                </svg>
            </div>
        </div>
    </div>`
};