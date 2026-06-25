const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit',async (e) =>{

    e.preventDefault();
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const belt = document.getElementById("belt").value;

    console.log(email,username,belt,password,'Are grabbed')

    const response = await fetch('http://localhost:3000/register', {

        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({

            email,
            username,
            password,
            belt
        })
    })
    console.log(response)
    console.log(`${username} is submitted`)

});
