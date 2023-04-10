const login = {
    username: "Guest",
    password: "Guest"
}


const userText = document.getElementById("user")
const passText = document.getElementById("pass")



function handleLogin() {
    
    let success = false

    if(userText.value === login.username)
    {
        console.log(`${userText.value} worked!`)
        success = true

        if(passText.value === login.password)
        {
            console.log(`${passText.value} worked also!`)
            success = true
            window.location = 'login.html'
        }

        else {
            window.alert("Wrong password")
        }
    }

    else {
        window.alert("Username is wrong")
    }

    console.log(success)
}

function openDash() {
    window.location = 'login.html'
}
