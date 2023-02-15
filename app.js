import services from './js/services.js'
import response from './js/response.js'
import popup from './js/popup.js'
import burgerMenu from './js/burgerMenu.js'
import projects from './js/projects.js'

function render() {
    burgerMenu()
    services()
    projects()
    response()
    popup()
}

render()