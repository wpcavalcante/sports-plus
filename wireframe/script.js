const btnMobile = document.querySelector(".btn-mobile")
const menuMobile = document.querySelector(".menu-mobile")
const linkMobile = document.querySelectorAll(".link-mobile")

btnMobile.addEventListener("click", () =>{
    btnMobile.classList.toggle("active")
    menuMobile.classList.toggle("display")
})

linkMobile.forEach(link =>{
    link.addEventListener('click', (event) =>{
        event.preventDefault()
        menuMobile.classList.remove("display")
        btnMobile.classList.remove("active")
    })

})