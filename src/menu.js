import addComp from "./index.js"

const MenuPage = () => {
    addComp("contents", "div", "", "menu-page").addElem()

    //adding image of menu  
    addComp("menu-page", "img", "", "menu-img").addElem()
    document.getElementById("menu-img").setAttribute( 'src' , '../src/images/menu.jpg')
    
}

export default MenuPage