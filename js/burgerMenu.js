const burgerMenu = () => {
    const nav = document.querySelector(".header-bottom")
    const about = document.querySelector("#about-us")
    const text = document.querySelector(".block-text")
    const headerMenu = document.querySelector(".menu")
    const menuBtn = document.querySelector(".menu-btn").parentElement
    const burger = document.querySelector(".burger")

    const content = () => {
        if (pageYOffset > 97 ) {
            nav.classList.add('menu-fixed')
            nav.style.height="auto"
            about.style.height = '1026'
            text.style.marginTop = '98px'
            headerMenu.classList.add("fixed")
            menuBtn.style.display = "none"
            burger.style.display = "block"
            burger.classList.remove("none")
        } else {
            nav.classList.remove('menu-fixed')
            nav.style.height=""
            about.style.height = ''
            text.style.marginTop = ''
            headerMenu.classList.remove("fixed")
            menuBtn.style.display = ""
            burger.classList.add("none")
            document.querySelector(".menu").classList.remove("appear")
        }
    }


    window.addEventListener("scroll", content)

    document.querySelector(".burger").addEventListener("click", () => {
        document.querySelector(".menu").classList.toggle("appear")
        if (innerWidth < 769){
            headerMenu.classList.add("fixed")
        }
    })

    document.querySelectorAll(".list-item").forEach(e => {
        e.addEventListener("click", () => {
            document.querySelector(".menu").classList.remove("appear")
        })
    })
}

export default burgerMenu