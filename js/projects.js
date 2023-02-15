import points from './points.js'

const projects = () => {
    points("#works", 5)
    const bigImage = document.querySelector(".big-image img")
    const smallImages = document.querySelectorAll(".small-image")
    const pointBlock = document.querySelectorAll("#works .point")

    smallImages.forEach(img => img.addEventListener("click", (e) => {
        smallImages.forEach(i => i.childNodes[0].style.border = "none")
        pointBlock.forEach(i => i.classList.remove("active"))
        bigImage.src = e.target.src
        pointBlock[e.target.dataset.number].classList.add("active")
        e.target.style.border = "5px solid rgba(255, 207, 0)"
    })
    )
}

export default projects