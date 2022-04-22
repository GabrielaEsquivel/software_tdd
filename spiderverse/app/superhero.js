class Spiderman{
    constructor(name, age, actor, numberOfMovies, filmStudio){
        this.nameHero = name;
        this.age = age;
        this.actor = actor;
        this.numberOfMovies = numberOfMovies;
        this.filmStudio = filmStudio;
    }

    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.filmStudio}`;
    }
}

module.exports = Spiderman; //exportar un modulo