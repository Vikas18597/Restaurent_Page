import addComp from "./index.js"

const Contactpage = () => {
    const str = "You can order directly from us.<br> \
    Call us at 9876544321. <br>We are also available in Zomato & UberEats"
    addComp("contents", "div", str, "contact-page").addElem()
}

export default Contactpage