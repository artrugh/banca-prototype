import { transitionSlider } from '../modules/transitionSlider.js';

//images function component
const container = (testimony, className, pictures) => {
    let content = ""
    // create a loop for the testimony components
    for (let i = 0; i < testimony.length; i++) {
        content += `
        <div id = "${testimony[i].name}" class = "${i === 0 ? "testimony active" : "testimony"}" >
            <span>"</span>
            <p class = "text">${testimony[i].testimony}</p>
            <div class = "client-details">
                <p class = "client-name">${testimony[i].name}</p> 
                <div class = "portrait" style = "background-image: url(${pictures[i]});"></div> 
            </div>
       </div>`
    }
    return `<div class = "${className}">${content}</div>`
}

// counter function component 
function counter(testimony) {
    let content = "";
    for (let i = 0; i < testimony.length; i++) {
        content += `
        <div class = "${i === 0 ? "counter active" : "counter"}"></div>`
    }
    return `<div id = "counter-container">${content}</div>`
}

// Slider component
export const Testimony = (testimony, pictures, title) => {

    // did mount
    setTimeout(() => {
        const testimonies = document.querySelectorAll(".testimony");
        const counterBalls = document.querySelectorAll(".counter");
        // call the transition function
        transitionSlider(7000, testimonies, 'testimony');
        transitionSlider(7000, counterBalls, 'counter');
    })

    return `
    <div id = "testimonios">
        <h1 class = "testimony-title" >${title}</h1>
        <div id = "testimonies-container">${container(testimony, "position-slider", pictures)}${counter(testimony)}</div>
    </div>`
}

