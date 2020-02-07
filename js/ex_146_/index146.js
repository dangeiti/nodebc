let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
    shouldOpenBatCave: function(username,password){
        if (this.username == 'batman' && this.password == 'Alfred1960KPO!'){
            console.log('Welcome back batman!!');
        } else {
            console.log('Sorry, you can\'t enter the Batcave, try again..')
        }
    }
}


user.shouldOpenBatCave()












