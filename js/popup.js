const popup = () => {
    const btns = document.querySelectorAll('button')
    btns.forEach(btn => btn.addEventListener("click", openPopup))

    function openPopup() {

        function close() { document.querySelector('.overlay').style.display = "none" }

        if (document.querySelector('.overlay')) {
            document.querySelector('.overlay').style.display = "flex"
        } else {
            const section = `
            <div class="overlay">
            <div class="contacts">
            <div class="close">x</div>
            <hgroup>
            <h1>Контактна форма</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Tempus integer
            laoreet diam imperdiet volutpat. Mauris elit feugiat a
            libero vel. Duis hac odio pharetra sit egestas. Adipiscing
            imperdiet sagittis et pret</p>
            </hgroup>
            <form>
            <input type="text" class="firstname" name="firstname"
            placeholder="Ваше ім’я">
            <input type="tel" class="tel" name="lastname"
            placeholder="Ваш номер телефону">
            <input type="email" class="email" name="email" placeholder="Ваша електронна адреса">
            <textarea type="text" class="msg" name="msg" placeholder="Ваше повідомлення"></textarea>
            <input class="btn-input" type="submit" value="Кнопка" onclick="{}" >
            </form>
            </div>
            </div>
                `
            document.body.insertAdjacentHTML('beforeend', section)
        }

        document.querySelector(".overlay").addEventListener("click", (e) => {
            if (e.target === e.currentTarget || e.target === document.querySelector(".close")) {
                close()
            }
        })
        document.querySelector(".overlay .btn-input").addEventListener("click", () => {
            close()
            alert('Дякую! Форма надіслана!')
        })
    }
}

export default popup