const services = () => {
    const cardBlock = document.querySelector("#service .cards")

    for (let i = 1; i <= 8; i++) {
        cardBlock.innerHTML += `
        <li>
        <img src="./img/services/(${i}).jpg" alt="">
    <p>Lorem ipsum dolor sit amet consectetur</p>
</li>
        `
    }
}

export default services