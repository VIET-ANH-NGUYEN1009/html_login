console.log("✅ File java.js đã chạy!");

const loginOverlay = document.querySelector('#login-overlay');
const registerOverlay = document.querySelector('#register-overlay');

function toggleLogin() {
    console.log("Toggle to Login");
    loginOverlay.classList.remove('hidden');
    registerOverlay.classList.add('hidden');
}

function toggleRegister() {
    console.log("Toggle to Register");
    loginOverlay.classList.add('hidden');
    registerOverlay.classList.remove('hidden');
}
