// fix the whole content when the setup or login is displayed
let windowPageY = 0;
let fix = false;

export const fixedPositionScroll = e => {
    
    // set the function when the container is cliked
    container.onclick = () => {
        if (fix) {            
            content.classList.remove("transparent");
            signup.classList.remove("transparent");
            login.classList.remove("transparent");
            // first unmount the form and then let free the container
            signform.style.display = "none";
            logform.style.display = "none";  
            fixedPositionScroll(e);
        }
    }
    // a timer is needed to in order or change the variable some miliseconds 
    // after the container event has already been apply
    setTimeout(() => {
        // set the state of fix
        fix = !fix;
        if (fix) {
            // store the window.pageYOffset
            windowPageY = window.pageYOffset;
            // content.classList.add("transparent");
        } else {content.classList.remove("transparent");}
        // set the class, position, top and opacity the  of the container
        container.style.position = fix ? "fixed" : "static";
        container.style.top = fix ? `-${windowPageY}px` : "0px";

        container.style.transition = "opacity 0.5s ease-out";
        container.style.opacity = fix ? 0.1 : 1;

        // content.classList.add("transparent");
        //set the scroll behavior before scroll to
        document.querySelector("html").style.scrollBehavior = "auto";
        // finally set the scroll to mantain it stable
        window.scrollTo({
            top: windowPageY,
            left: 100,
            behavior: 'auto'
        });
        // dont't forget to set again the scroll behavior in smooth
        document.querySelector("html").style.scrollBehavior = "smooth";
    }, 10)
};