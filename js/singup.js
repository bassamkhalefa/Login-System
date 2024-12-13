var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var btnsingin = document.getElementById("btnsing");
var AllUser = []


if (JSON.parse(localStorage.getItem("alluser"))) {
    AllUser = JSON.parse(localStorage.getItem("alluser"))
}
btnsingin.addEventListener("click", function () {
    AddUser()
})

function AddUser() {

    if (signupName.value == '' || signupEmail.value.value == '' || signupPassword.value == '') {
        document.querySelector(".empty").classList.remove("d-none")
    }

    else {
        document.querySelector(".empty").classList.add("d-none")
        if (E_exist()) {
            var user = {
                username: signupName.value,
                useremail: signupEmail.value,
                userpassword: signupPassword.value,
            }
            AllUser.push(user)
            localStorage.setItem("alluser", JSON.stringify(AllUser))
            clear()
            document.querySelector(".exist").classList.add("d-none");
            window.open("./index.html")

        }

        else {
            document.querySelector(".exist").classList.remove("d-none");
        }
    }

}












function clear() {
    signupName.value = null;
    signupEmail.value = null;
    signupPassword.value = null;

}

function E_exist() {
    for (var i = 0; i < AllUser.length; i++) {
        if (AllUser[i].useremail == signupEmail.value) {
            return false;
        }
    }
    return true;

}
