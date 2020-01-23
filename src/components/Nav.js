export const Nav = data => {

    //didMount
    setTimeout(() => {
        // change the position of the menu bar when some session is clicked
        const list = document.querySelectorAll(".link");

        [...list].map(a => a.onclick = () => {

            const menuIcon = document.querySelectorAll(".bar");
            [...menuIcon].map(bar => bar.classList.toggle("diagonal"));
            // change classes of some buttons
            nav.classList.toggle("active");
            signup.classList.remove("transparent");
            login.classList.remove("transparent");
            carticon.classList.remove("transparent");
            document.querySelector("#content").classList.toggle("transparent");
        })
    })
    let content = ""
    data.map(sec => content +=
        `<a href = "#${sec}" class = "link">
            <li class = "li">${sec.toUpperCase()}</li>
        </a>`
    )
    return `<div id = "nav" class = "nav">${content}</div>`
}
