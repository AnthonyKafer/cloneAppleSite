const allButtons = document.querySelectorAll("#colorSelection li")
const image = document.querySelector(".image")

allButtons.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{

        allButtons.forEach((btn)=>
            btn.querySelector(".colorContainer").classList.remove("selected")
        )

        const button = event.target
        const id = button.getAttribute("id")
        console.log(id)
        const colorContainer =  button.querySelector(".colorContainer")
        colorContainer.classList.add("selected")

        image.classList.toggle("transition")
        image.setAttribute("src", `imgs/iphone_${id}.jpg`)

        setTimeout(()=>{
            image.classList.toggle("transition")
        }, 200)
    })})
