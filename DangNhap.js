const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.txtUserName.value;
    const password = loginForm.txtPassword.value;

    if (username === "admin" && password === "admin") {
        alert("Dang nhap thanh cong");
        location.reload();
    } else {
        alert("Dang nhap that bai");
    }
})