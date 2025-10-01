function register() {
    
    const userLogin = document.querySelector('.regUserInput').value
    const userPasswd = document.querySelector('.regPasswdInput').value

    if (userLogin && userPasswd) {
       localStorage.setItem("Username", userLogin)
       localStorage.setItem("Password", userPasswd)
       alert("Rejestracja pomyślna")
    } 
    else {
        alert("Brakuje danych!")
    }
}

function login() {
    const userLogin = document.querySelector('.logUserInput').value
    const userPasswd = document.querySelector('.logPasswdInput').value

    const savedLogin = localStorage.getItem("Username")
    const savedPasswd = localStorage.getItem("Password")

    if (userLogin === savedLogin && userPasswd === savedPasswd) {
        alert("Zalogowano poprawnie")
    } else {
        alert("Nieprawidłowe dane")
    }
}