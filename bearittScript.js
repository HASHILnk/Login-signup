document.addEventListener('DOMContentLoaded', () => {
    const signInTab = document.getElementById('signInTab');
    const signUpTab = document.getElementById('signUpTab');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    // Show the Sign In form by default
    signInForm.classList.add('active');

    // Toggle to Sign In
    signInTab.addEventListener('click', () => {
        signInTab.classList.add('active');
        signUpTab.classList.remove('active');
        signInForm.classList.add('active');
        signUpForm.classList.remove('active');
    });

    // Toggle to Sign Up
    signUpTab.addEventListener('click', () => {
        signUpTab.classList.add('active');
        signInTab.classList.remove('active');
        signUpForm.classList.add('active');
        signInForm.classList.remove('active');
    });
});





const handleSubmit = ()=>{
    event.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        age: Number(document.getElementById('age').value),
        gender:document.getElementById('gender').value,
        mobileNo: document.getElementById('mobileNo').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    if(user.password != document.getElementById('confirmPassword').value){
        alert("Password and Confirm Password must be the same!!");
        return;
    }

    const userData = JSON.stringify(user)

    fetch('https://api.bearitt.com/api/user/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: userData
    })
    .then(response => {
        if (!response.ok) {
            console.error(response)
        }
        return response;
    })
    .then(
        alert(`User ${user.name} created successfully!!`)
    )
    .catch(error => {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    });

}



const handleSignUp = ()=>{
    event.preventDefault()

    const loginData = {
        email: document.getElementById("signUpEmail").value,
        password: document.getElementById("signUpPassword").value
    }
    
    fetch('https://api.bearitt.com/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            console.error(response)
        }
        return response;
    })
    .then(response=>{
        console.log(response),
        alert("Login Successfull")
})
    .catch(error => {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    });
}