import './styles/main.css'
import './styles/animation.css'
import home from "./home.js"
import Contactpage from './contact'
import MenuPage from './menu.js'
// function to add elements on html 

const addComp  = (parent,child,str,id) => {
    const addElem = () =>{
        const node = document.createElement(child)
        document.getElementById(parent).appendChild(node)   
        if ((id != undefined) | (str != "")){
            node.setAttribute( 'id' , id)
        }
        if (str != undefined){
            node.innerHTML = str
        }      
    }
    return {addElem}
}

export default addComp

// adding top section having tabs 
addComp("contents", "div", "", "tabs").addElem()
addComp("tabs", "button", "Home", "home").addElem()
addComp("tabs", "button", "Menu", "menu").addElem()
addComp("tabs", "button", "Contact", "contact").addElem()

// this is where pages are called 
home()
Contactpage()
MenuPage()

// this is where pages are swapped on clicking on tabs 

const tabs = document.getElementById('tabs')
const showHome = document.getElementById('home-page')
const showMenu = document.getElementById('menu-page')
const showContact = document.getElementById('contact-page')

//transitions for image when clicking on different tab needs to be fixed
const Transition = document.querySelectorAll("img")
 
//clicking on tabs function 
const clicked = (x) => {
    if (x.target.tagName != 'BUTTON') return

    if (x.target.innerText === 'Home'){
        showHome.style.visibility = 'visible'
        showContact.style.visibility = 'hidden'
        showMenu.style.visibility = 'hidden'
        Transition.forEach((item) => {
            if(item.id != 'menu-img'){
                item.style.transition = '0.4s'
            }
        })
    }
    else if (x.target.innerText === 'Contact'){
        showHome.style.visibility = 'hidden'
        showContact.style.visibility = 'visible'
        showMenu.style.visibility = 'hidden'
        Transition.forEach((item) => {
            item.style.transition = '0s'
        })
    }
    else if (x.target.innerText === 'Menu'){
        showHome.style.visibility = 'hidden'
        showContact.style.visibility = 'hidden'
        showMenu.style.visibility = 'visible'
        Transition.forEach((item) => {
            item.style.transition = '0s'
        })
    }
}

tabs.addEventListener('click', clicked)







