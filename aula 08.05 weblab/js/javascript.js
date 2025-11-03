// console.log("Olá da página")

/*
document.img.style.display = "none";

let textoEmVerde = document.getElementsByClassName("textoEmVerde")
*/

// let textoEmVerde = document.getElementsByClassName("textoVerde")
// textoEmVerde[1].style.color = "blue"

// document.getElementById("titulo").style.color="red";

// document.write("lalalala")

// document.getElementById("divtexto").classList.add("textoEmVerde")


document.getElementById("light").display = "none"

function ocultarIconDark() {
    document.body.classList.add("darkTheme")
    document.getElementById("dark").display = "none";
    document.getElementById("light").display = ""
}

function ocultarIconLight() {
    document.body.classList.remove("darkTheme")
    document.getElementById("light").display = "none";
    document.getElementById("dark").display = ""
}

/*
function greenTheme() {
    document.body.className = "greenTheme"
    // document.body.classList.add("greenTheme")

}

function greyTheme() {
    document.body.classList.toggle("greyTheme")
}
*/
