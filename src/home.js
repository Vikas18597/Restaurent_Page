// function to add Component(div, li, button, etc)

import addComp from "./index.js"

const home = () => {
    let str = "Welcome to The Khati's <br> \
    We provide authentic Indian Food <br> \
    Serving happiness Since 1998"
    let addDiv = addComp("contents", "div", str, "home-intro")
    addDiv.addElem()
}


export default home
