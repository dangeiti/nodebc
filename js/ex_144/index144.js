let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
}

console.log(user.username)
console.log(user.password)

let capitalizedBatman = user.username.charAt(0).toUpperCase() + user.username.slice(1)
console.log(capitalizedBatman)
let replaceStringInPass = user.password.slice(0,6) + ' ' + user.password.slice(10)
console.log(replaceStringInPass)