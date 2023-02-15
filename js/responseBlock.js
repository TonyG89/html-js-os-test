const responseBlock = (n = 0) => {
    const cardBlock = document.querySelector("#response .cards")
    
    cardBlock.innerHTML = ''
    for (let i = n + 1; i <= n + 2; i++) {
        cardBlock.innerHTML += `
        <li>
        <img src="./img/response/avatar-${i}.png" alt="">
        <h3>Lorem ipsum dolor sit amet consectetur</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Tempus integer laoreet diam imperdiet volutpat. Mauris elit feugiat a libero vel. Duis hac odio pharetra sit egestas. </p>
        <h4>More detailed</h4>
        <p class="description">Lorem ipsum dolor</p>
    </li>
        `
    }
}

export default responseBlock