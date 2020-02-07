// let player = {
//     name: null,
//     energy: 100,
//     lives: 3,
//     spawn: function(){
//         this.energy = 100;
//     },
//     loseEnergy: function(damage){
//         console.log(`energy ${this.energy}: inflicting ${damage} result: ${this.energy - damage}`)

//         if(this.energy > 0){
//             this.energy = this.energy - damage;
//         }
//         if(this.energy <= 0){
//             console.log("Reducing one life")
//             this.loseLife()
//         }
//     },
//     recoverEnergy: function(energyUp){
//         console.log(`energy ${this.energy}: recovering ${energyUp} result: ${this.energy + energyUp}`)

//         this.energy = this.energy + energyUp;

//         if (this.energy + energyUp >= 100){
//             console.log('No energy is allowed more than 100 or equal to 100');
//         }
//     },
//     loseLife: function(){
//         this.lives = this.lives - 1
//         this.spawn();
//         console.log(`Player has ${this.lives} lives`);
//         if(this.lives == 0){
//             console.log('============================== Game over')
//         }
//     },
//     recoverLife: function(){

//         this.lives = this.lives + 1;
//         this.spawn();

//         if (this.lives >= 99){
//             console.log('Sorry we cannot have more the 99 lives');
//         }
//         console.log(`Player has ${this.lives} lives`);
//     }
// }

// player.name = 'Dan';
// player.loseLife();//2 lives
// player.loseEnergy(10);//90
// player.loseEnergy(5);//85
// player.loseEnergy(15);//70
// player.loseEnergy(20);//50
// player.recoverEnergy(10);//60
// player.loseEnergy(30);//30
// player.loseEnergy(40);//1 life
// player.loseLife();//0 life (seems like this is not working)
// player.recoverLife();//1 life
// player.recoverLife();//2 lives

// console.log(`${player.name} has ${player.energy} energy and ${player.lives} life/lives`)

let player = {
    name: null,
    energy: 100,
    lives: 3,
    spawn: function(){
        this.energy = 100
    },
    loseEnergy: function(damage){
        if(this.energy > 0){
            this.energy = this.energy - damage;
            console.log(`Player has ${this.energy} energy and ${this.lives} lives`)
        }
        if(this.energy <= 0){
            this.loseLife()
        }
    },
    recoverEnergy: function(energyUp ){
        this.energy = this.energy + energyUp;
        console.log(`Player has ${this.energy} energy and ${this.lives} lives`)
        if(this.energy > 100){
            console.log('Sorry we cannot have more than 100 energy!')
        }
    },
    loseLife: function(){
        this.lives = this.lives - 1;
        this.spawn();
        console.log(`Player has ${this.energy} energy and ${this.lives} lives`);
        if(this.lives == 0){
            console.log('=================================  Game Over! ============================')
        }
    },
    recoverLife: function(){
        this.lives = this.lives + 1;
        this.spawn();
        console.log(`Player has ${this.energy} energy and ${this.lives} lives`)
        if(this.lives > 99){
            consolo.log('Sorry we cannot have 100 or more than 100 lives')
        }
    }
}

player.name = 'Dan';
player.loseLife();//2 lives
player.loseEnergy(10);//90
player.loseEnergy(5);//85
player.loseEnergy(15);//70
player.loseEnergy(20);//50
player.recoverEnergy(10);//60
player.loseEnergy(30);//30
player.loseEnergy(40);//1 life
player.loseLife();//0 life
player.recoverLife();//1 life
player.recoverLife();//2 lives

console.log(`${player.name} has ${player.energy} energy and ${player.lives} life/lives`)




























































































