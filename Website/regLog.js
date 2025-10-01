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