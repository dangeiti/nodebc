let user = {
    username: null,
    password: null,
    greet: function(){
        if(this.username != null && this.password != null){
            console.log(`Hello, I'm user ${this.username}`);
        } else {
            console.log('Please assign a username value');
        }
    },
    updatePassword: function (passwordString){
        this.password = passwordString;
    },
    updaterUsername: function(usernameString){
        this.username = usernameString;
    },

}

user.greet();
user.updaterUsername('Dan');
user.updatePassword('coding');
user.greet();




