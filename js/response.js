const response = () => {
    const cardBlock = document.querySelector("#response .cards")

    const pointsBlock = document.querySelector("#response .points")

    for (let i = 1; i <= 4; i++) {
        cardBlock.innerHTML += `
        <li>
        <img src="./img/response/avatar-${i}.png" alt="">
        <h3>Lorem ipsum dolor sit amet consectetur</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tempus integer laoreet diam imperdiet volutpat. Mauris elit feugiat a libero vel. Duis hac odio pharetra sit egestas. </p>
        <h4>More detailed</h4>
        <p class="description">Lorem ipsum dolor</p>
    </li>
        `
        pointsBlock.innerHTML += `<div class="point">1</div>`
    }
}

export default response