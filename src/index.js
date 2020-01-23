// STYLE
import style from './style.scss';

// FONT AWESOME
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";

// COMPONENTS
import { Logo } from './components/Logo';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Slider } from './components/Slider.js';
import { Cart } from './components/Cart.js';
import { Empresa } from './components/Empresa.js';
import { Launch } from './components/Launch.js';
import { Testimony } from './components/Testimony.js';
import { Contacto } from './components/Contacto.js';
import { Footer } from './components/Footer.js';
import { Tienda } from './components/Tienda.js';
import { Form } from './components/Form.js';

// IMG SLIDER
// import img0 from './assets/slider/0.jpg';
// import img1 from './assets/slider/1.jpg';
// import img2 from './assets/slider/2.jpg';

// //IMG TESTIMONY
import img3 from './assets/testimony/0.png';
import img4 from './assets/testimony/1.png';
import img5 from './assets/testimony/2.png';

//IMG PRODUCTS
import img6 from './assets/slider/0s.png';
import img7 from './assets/slider/1s.png';
import img8 from './assets/slider/2s.png';

//IMG CART
import img9 from './assets/slider/0mini.png';
import img10 from './assets/slider/1mini.png';
import img11 from './assets/slider/2mini.png';

// DATA
import { data } from './data';

//MODULE
import { closeNav } from './modules/closeNav.js';
import { mouseMove } from './modules/mouseMove.js';
import { fixedPositionScroll } from './modules/fixedPositionScroll.js';

// IMG ARRAYS
// const imgSlider = [img0, img1, img2];
const imgTestimony = [img3, img4, img5];
const imgProducts = [img6, img7, img8];
const imgCart = [img9, img10, img11];

const body = document.querySelector("body");
// body events
body.onclick = e => closeNav(e);
body.onmouseover = e => mouseMove(e);
// change the color of the logo when the app is scrolled
body.onscroll = () => {
    window.pageYOffset > 150 ?
        window.pageYOffset < body.scrollHeight - 1500 ?
            logo.style.fill = "#a18a57" : logo.style.fill = "#f6f6f6" : logo.style.fill = "#f6f6f6";
}


// global variable
let counter = 0;
// global function
const increaseCart = () => {
    counter += 1;
    let left = 0;
    // if the counter is more than 10 put it 10px more in teh right
    counter < 10 ? left = 48 : left = 42
    document.querySelector("#counter-cart").textContent = counter;
    document.querySelector("#counter-cart").style.left = `${left}%`
}

// App
body.innerHTML =
    `<div id = "container">  
    ${Slider(imgProducts, "visita nuestro sitio", "img", 3000, Logo("logo-slider"))}
        <div id="main">
        ${Header(fixedPositionScroll, Logo("logo"))}
        ${Nav(data.menu_sessions)}
        ${Cart(data.sold, imgCart)}
            <div id = "content" class = "matt">
            ${Empresa(data.empresa)}
            ${Tienda(data.tienda, imgProducts, increaseCart)}
            ${Launch()}
            ${Testimony(data.testimonies, imgTestimony, "")}
            ${Contacto()}
            ${Footer(Logo("logo-footer"))}
            </div>
        </div>
     </div>
     ${Form("signform", fixedPositionScroll, "registrarse")}
     ${Form("logform", fixedPositionScroll, "iniciar sesión")}
    `;





