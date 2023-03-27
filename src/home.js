// function to add Component(div, li, button, etc)

import addComp from "./index.js"

const home = () => {
    let str = "Welcome to The Khati's <br> \
    We provide authentic Indian Food <br> \
    Serving happiness Since 1998"
    addComp("contents", "div", "", "home-page").addElem()
    addComp("home-page", "div", str, "home-intro").addElem()
    addComp("home-page", "div", "", "pics").addElem()
    
    addComp("pics", "img", "", "pic1").addElem()
    document.getElementById("pic1").setAttribute( 'src' , '../src/images/food_pic_1.jpg')
    
    addComp("pics", "img", "", "pic2").addElem()
    document.getElementById("pic2").setAttribute( 'src' , '../src/images/food_pic_2.jpg')
    
    addComp("pics", "img", "", "pic3").addElem()
    document.getElementById("pic3").setAttribute( 'src' , '../src/images/food_pic_3.jpg')
}


export default home
