const points = (block, n) => {
    const pointsBlock = document.querySelector(`${block} .points`)
    for (let i = 1; i <= n; i++) {
        pointsBlock.innerHTML += `<div class="point"></div>`
    }
    pointsBlock.children[0].classList.add('active')
}

export default points