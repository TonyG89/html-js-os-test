const burgerMenu = () => {
    const nav = document.querySelector(".header-bottom")
    const about = document.querySelector("#about-us")
    const text = document.querySelector(".block-text")
    const headerMenu = document.querySelector(".menu")
    const menuBtn = document.querySelector(".menu-btn").parentElement
    const burger = document.querySelector(".burger")
    
    window.addEventListener("scroll", () => {
        if (pageYOffset > 97) {
            nav.classList.add('menu-fixed')
            about.style.height = '1026'
            text.style.marginTop = '98px'
            headerMenu.classList.add("fixed")
            menuBtn.style.display = "none"
            burger.style.display = "block"
            burger.classList.remove("none")
        } else {
            nav.classList.remove('menu-fixed')
            about.style.height = ''
            text.style.marginTop = ''
            headerMenu.classList.remove("fixed")
            menuBtn.style.display = ""
            burger.classList.add("none")
            document.querySelector(".menu").classList.remove("appear")
        }
    })

    document.querySelector(".burger").addEventListener("click", () => {
        document.querySelector(".menu").classList.toggle("appear")
    })

    document.querySelectorAll(".list-item").forEach(e => {
        e.addEventListener("click", () => {
            document.querySelector(".menu").classList.remove("appear")
        })
    })
}

export default burgerMenu