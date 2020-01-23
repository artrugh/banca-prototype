// this function is applied when the screen is scrolled
// changing the opacity of the slider and then its diplay and fixing the header at the top

export const scrolling = () => {
    slider.style.transition = "opacity 1.5s ease-out";
    slider.style.opacity = 0;
    main.style.display = "block";
    //clear the time out
    //don't scroll so far
    window.scrollTo({ top: 0 });
    //after a second
    setTimeout(() => {
        slider.style.display = "none";
        header.style.position = "fixed";
        header.style.opacity = 1;
        nav.style.position = "fixed";
    }, 1000)
}
