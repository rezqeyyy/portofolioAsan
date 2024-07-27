document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const validUsername = '1';
        const validPassword = '1';
        
        if (username === validUsername && password === validPassword) {
            alert('Login successful!');
            window.open("/home/porto.html");
        } else {
            alert('Invalid username or password');
        }
    });
});
