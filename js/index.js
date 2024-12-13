var signinEmail = document.getElementById("signinEmail")
var signinPassword = document.getElementById("signinPassword")
var btnlogin = document.querySelector("button")
var AllUser = []

if (localStorage.getItem("alluser")) {
    AllUser = JSON.parse(localStorage.getItem("alluser"))
}




btnlogin.addEventListener("click", function () {
    if (isexsist()) {
        window.open("./home.html")
        clear()
    }
    else {
        document.getElementById("incorrect").classList.remove("d-none")
    }

})


function isexsist() {
    for (let i = 0; i < AllUser.length; i++) {
        if (AllUser[i].useremail == signinEmail.value && AllUser[i].userpassword == signinPassword.value) {
            localStorage.setItem("curruntuser", AllUser[i].username)
            return true
        }
    }
    return false

}

function clear() {
    signinEmail.value = null
    signinPassword.value = null

}