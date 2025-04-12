// Function to handle sign-up
function signUp() {
    var name = document.getElementById("signUpName").value;
    var email = document.getElementById("signUpEmail").value;
    var password = document.getElementById("signUpPassword").value;

    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    var user = {
        name,
        email,
        password,
    };

    // Save user data to localStorage
    localStorage.setItem(email, JSON.stringify(user));
    alert('Sign-up successful! You can now sign in.');
    window.location.href = 'SignIn.html';
}

// Function to handle sign-in
function signIn() {
    var email = document.getElementById("signInEmail").value;
    var password = document.getElementById("signInPassword").value;

    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    var user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert(`Welcome back, ${user.name}!`);
    } else {
        alert('Invalid email or password.');
    }
}