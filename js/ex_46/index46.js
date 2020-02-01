let userAndPassword = 'pepito2017,12345';
let username = userAndPassword.substr(0,10);
let password = userAndPassword.slice(11);
let message = 'The user ' + username + ' has ' + password + ' as password';
console.log(message);