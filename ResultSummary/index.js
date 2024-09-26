const btnElement = document.getElementById("button");
const btnElement2 = document.getElementById("button2");
const innercontainer = document.getElementById("inner-container");
const content = document.getElementById("nextInfoBlock")
btnElement.addEventListener("click", function() {
    content.style.display = "block"
    innercontainer.style.display = "none"

})


btnElement2.addEventListener("click", function() {
    content.style.display = "none"
    innercontainer.style.display = "block"
})
