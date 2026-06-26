const redirectToWelcome = (event) => {
    event.preventDefault();
    window.location.href = 'welcome.html';
};

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const forgotPasswordForm = document.getElementById('forgot-password-form');

if (loginForm) {
    loginForm.addEventListener('submit', redirectToWelcome);
}

if (signupForm) {
    signupForm.addEventListener('submit', redirectToWelcome);
}

if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', redirectToWelcome);
}
