// transition slider
// change classes of the slider's elements
export const transitionSlider = (settime, slider, nameClass, index = 0) => {

    const sliderContainer = document.getElementById("slider");
    var timmerTransition = () => setTimeout(() => {

        if (index < slider.length) {
            // clean all posible active class setting all the items whith the image class
            [...slider].map(img => img.className = nameClass);
            // toggle the class to active
            slider[index].classList.toggle('active')

            index === 0 ?
                // toggle the pre image which flows to the left
                slider[slider.length - 1].classList.toggle('pre')
                :
                // toggle the pre image which flows to the left
                slider[index - 1].classList.toggle('pre')
            transitionSlider(settime, slider, nameClass, index + 1)
        } else {
            // create and infinite loop of the slider effect
            transitionSlider(settime, slider, nameClass, 0)
        }
    }, settime)
 
    // clean the timmer after the slider has already been unmounted
    // but not clean it if it is applied to the testimony component
    nameClass === "img" ?
        sliderContainer.clientHeight > 0 ?
            timmerTransition() : clearTimeout(timmerTransition) : timmerTransition();
}