import { scrolling } from "../modules/scrolling.js"
import { transitionSlider } from '../modules/transitionSlider.js';

// main Slider
export const Slider = (sources, title, nameClass, settime, Logo) => {

    // did Mount
    setTimeout(() => {
        // change the opacity of the logo
        const logo = document.querySelector("#logo-slider");
        logo.style.opacity = 1;
        // set a delay opacity for the title
        const title = document.querySelector("#title");
        title.style.transitionDelay = "2.5s";
        title.style.opacity = 0.5;

        // add a clicked event when the slider is clicked
        const images = document.querySelectorAll(".img");
        [...images].map(img => img.onclick = () => {
            scrolling();
            // after unmount the slider set the hight of the testimonmy container
            document.querySelector(".position-slider").style.height = `${document.querySelector(".testimony").getBoundingClientRect().height}px`;
        });
        // display the transitions
        transitionSlider(settime, images, nameClass);
    });



    setTimeout(() => {
        // after 10 seconds get out of the slider
        // set the time out only if the slider has not been unmounted     
        if (main.getBoundingClientRect().height === 0) {
            scrolling();
            // after unmount the slider set the hight of the testimonmy container
            document.querySelector(".position-slider").style.height = `${document.querySelector(".testimony").getBoundingClientRect().height}px`;
        }
    }, 20000)

    let content = ""
    //loop inside the array of sources
    for (let i = 0; i < sources.length; i++) {
        content += `<div class = "img" style = "background-image: url(${sources[i]});"></div>`
    }

    content = `
    <div class = "opacity-slider" id = "slider">
        <h1 id = "title">${title}<i class="far fa-hand-pointer"></i></h1>
        <div class = "img active">
        ${Logo}
        </div>
        ${content}
    </div>`

    return content;
}



// ${i === 0 ? "img active": "img"}