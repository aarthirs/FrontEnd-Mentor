let btnCollections = document.querySelectorAll(".button");

btnCollections.forEach(btn => {
    btn.addEventListener("click", function() {

        const descriptionCon = this.nextElementSibling; //used to description nxt container that is btn tag nxt sibling is div(description)
        const plus = this.querySelector('.plus')
        const minus = this.querySelector('.minus') //dot is imp when defining specific class

        if (descriptionCon.style.maxHeight) {
            //if it is open close
            descriptionCon.style.maxHeight = null;
            plus.style.display = 'block';
            minus.style.display = 'none';
        } else {
            //open
            descriptionCon.style.maxHeight = descriptionCon.scrollHeight + "px";
            plus.style.display = 'none';
            minus.style.display = 'block'; //visible
        }
    })
})
