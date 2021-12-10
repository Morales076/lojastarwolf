
var card = document.getElementsByClassName("produto")
let products = [...card]
products.map(item => {
    item.addEventListener("mouseover", () => {
        item.childNodes[9].focus()
    })
    item.addEventListener("mouseleave", () => {
        item.childNodes[9].blur()
    })
})