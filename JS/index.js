

// // SignUp
var fullName = document.getElementById("fullName")
var email = document.getElementById("email")
var password = document.getElementById("password")

loginEmail = document.getElementById("loginEmail")
loginPassword = document.getElementById("loginPassword")

var userList;

if (localStorage.getItem("UserList") == null){
    userList = []
}else{
    userList = JSON.parse(localStorage.getItem("UserList"))
}




function addUser(){

    if(fullName.value.trim() == ""){
        alert("The Name input is empty!")
        fullName.focus()
        return
    }
    if(email.value.trim() == ""){
        alert("The Email input is empty!")
        email.focus()
        return
    }

    var emailValidation = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm

    if(!emailValidation.test(email.value)){
        alert("your Email is not Validation!")
        email.focus()
        return
    }

    if(password.value.trim() == ""){
        alert("The Password input is empty!")
        email.focus()
        return
    }

    var passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    if(!passwordValidation.test(password.value)){
        alert("Password must contain at least 8 characters including capital letters, numbers and symbols!")
        email.focus()
        return
    }

    var user = {
        fullName : fullName.value,
        email : email.value,
        password : password.value
    }
    userList.push(user)
    localStorage.setItem("UserList",JSON.stringify(userList))
    window.location.href = "index.html"

    clear()
}

function clear(){
    fullName.value = ""
    email.value = ""
    password.value = ""
}



function loginUser(){
    console.log("Eyad");
    
    if(loginEmail.value.trim() == "" || loginPassword.value.trim() == ""){
        alert("Please Enter Your Email & Password!")
        return
    }
    var userList = JSON.parse(localStorage.getItem("UserList"))
    var user = userList.find(
        (user) =>
            user.email == loginEmail.value && user.password == loginPassword.value)

    if(user){
        localStorage.setItem("nameUser", user.fullName)
        window.location.href = "Home.html"
    }else{
        alert("Please Check Your Email and Password")
    }
    clearLoginInput()
}

function clearLoginInput(){
    loginEmail.value = ""
    loginPassword.value = ""
}

// Home 

window.onload = function (){
    var userName = localStorage.getItem("nameUser")
    if(userName){
        document.getElementById("userName").textContent = userName
    }
}

function backTologin(){
    window.localStorage.href = "index.html"
}