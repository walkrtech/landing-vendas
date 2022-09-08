window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(reveal => {
        let windowHeight = window.innerHeight;
        let revealTop = reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 200){
            reveal.classList.add('slidein')
        }else{
            reveal.classList.remove('slidein')
        }
    })
})

function display(module) {
    
    document.querySelectorAll(`.module-${module}`).forEach(element => {
        if(element.classList.contains("mobile")){
            element.classList.remove("mobile")
            document.getElementById(`arrow-${module}`).setAttribute("src", "https://landing-vendas.s3.amazonaws.com/icons/arrow-right.svg")
        }else {
            document.getElementById(`arrow-${module}`).setAttribute("src", "https://landing-vendas.s3.amazonaws.com/icons/arrow-down.svg")
            element.classList.add("mobile")
        }
    });
}

function showFaq() {
    let icon = event.srcElement.textContent

    if(icon == "+"){
        event.path[2].childNodes[3].classList.remove('d-none')
        event.srcElement.innerHTML = "-"
    }else{
        event.path[2].childNodes[3].classList.add('d-none')
        event.srcElement.innerHTML = "+"
    }
}