
class snowPlayer {
    constructor(name, lives, damage){
        this.name = name;
        this.lives = lives;
        this.damage = damage;
    };

    throwBall() {
        if (!isNaN(this.damage)) {
        let hit = this.damage;
            console.log(`${this.name} take ${this.damage} points of damage.`);
            return hit
        }
    }
};

class warrior extends snowPlayer {
    constructor(name, lives, damage){
        super(name, lives = 3 , damage = 1);
        };
};

class magician extends snowPlayer {
    constructor(name, lives, damage){
        super(name, lives = 2 , damage = 2);
        };
};

let playerOne = new warrior('Jose');
let playerTwo = new magician('Manuel');
let playerThree = new warrior('Pedro');
let playerFour = new magician('Juan');

// console.log(playerOne);
// console.log(playerTwo);

console.log(playerOne.throwBall());

playerTwo.throwBall();


class team {
    constructor(teamName, teamPlayers) {
        teamName = this.teamName;
        teamPlayers = this.teamPlayers = [];
        };

        addPlayer(player) {
            this.teamPlayers.push(player);
        };
        
        teamDefeated(){
            if (this.teamPlayers.every((snowPlayer) => snowPlayer.lives <= 0)){
                return console.log(`The team ${this.teamName} lost the battle.`) ;
            };
        }; 
};

let team1 = new team('Team 1');
let team2 = new team('Team 2');

team1.addPlayer(playerOne);
team1.addPlayer(playerTwo);

team2.addPlayer(playerThree);
team2.addPlayer(playerFour);

console.log(team1);
console.log(team2);

class snowWar{
    constructor(team1, team2) {
        team1 = this.team1;
        team2 = this.team2;
        };
        
    startSnowWar() { 

        let allTeams = [team1, team2]

        allTeams.forEach(() =>{
                let randomTeam = Math.floor(Math.random() * allTeams.length);

                let randomPlayer = Math.floor(Math.random() * allTeams[randomTeam].teamPlayers.length);

                let selectedPlayer = allTeams[randomTeam].teamPlayers[randomPlayer];

                let attackerPlayer = selectedPlayer.throwBall();
                let attackedTeam = allTeams.find(x => x !== allTe
                    .teams[randomTeam]);
                let attackedPlayer = attackedTeam.find(x => x !== allTe
                    .teams[randomTeam])



                console.log(attackerPlayer);

                // player attacks another player
                

                });
    };
};

let newWar = new snowWar('War 1');


console.log(newWar.startSnowWar());
