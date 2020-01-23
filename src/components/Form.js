export const Form = (id, fixScroll, name) => {

    // set the delete event
    setTimeout(() => {
        const cross = document.querySelectorAll(".cross");
        [...cross].map(cross =>
            cross.onclick = e => {
                signform.style.display = "none";
                logform.style.display = "none";
                content.classList.remove("transparent");
                signup.classList.remove("transparent");
                login.classList.remove("transparent");
                fixScroll(e)
            })
    }, 100)

    return `
<section id=${id}>
    <div class="contact-section">
        <div class="container-form-sign">
        <div class = "cross"></div>
        <h3 class = "contact-title">${name.toUpperCase()}</h3>
        <button type="submit" value="Send"class="button facebook"><i class="fab fa-facebook-square"></i>FACEBOOK</button>
        <button type="submit" value="Send" class="button google"><i class="fab fa-google-plus-square"></i>GOOGLE</button>
        <form>
                <div class="lebels">
                    <div class="form-group">
                        <input type="email" class="form-control"  placeholder="  Email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="  Contraseña">
                    </div>
                </div>
                <div class="send">
                <button type="submit" value="Send" class="btn btn-default submit">${name}</button>
                </div>
            </form>
        </div>
</section>`
}