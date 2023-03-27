import './styles/main.css'
import './styles/animation.css'
import home from "./home.js"

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

// this is where home page is showed 
home()







