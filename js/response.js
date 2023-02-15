import points from './points.js'
import responseBlock from './responseBlock.js'

const response = () => {
    points("#response", 4)
    responseBlock()

    const pointBlock = document.querySelectorAll("#response .point")

    pointBlock.forEach(point => {
        point.addEventListener("click", (e) => {
            pointBlock.forEach((p,index) => {
                p.classList.remove('active')
                if (p === e.target){
                    responseBlock(index)
                }
            })
            e.target.classList.add("active")
        })
    })

}

export default response