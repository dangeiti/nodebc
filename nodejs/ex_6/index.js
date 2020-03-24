const greet = (firstName, lastName, callback) => {
    console.log(`Hi ${firstName} ${lastName}`);
    callback()
}



greet('Danny', 'Capa', () => {console.log(`This code gets executed after the greet function call`)} )