function Character(name, life, pdefense, mdefense) {
    this.name = name;
    this.life = life;
    this.pdefense = pdefense;
    this.mdefense = mdefense;


    // Physical and Magical Defense functions
    this.physicalDefend = function() {
        console.log(`${this.name} defended with ${this.pdefense} points of physical defense!`)
    }
    this.magicalDefend = function() {
        console.log(`${this.name} defended with ${this.mdefense} points of magical defense!`)
    }

    // Taking damage Functions
    this.takingPhysicalAttack = function(damage) {
        const finalDamage = damage - this.pdefense;
        if (finalDamage > 0) {
            this.life -= finalDamage;
            console.log(`${this.name} took ${finalDamage} points of damage.`)
            console.log(`${this.name} has now ${this.life} points of life left.`)
        } else {
            console.log(`${this.name} defended from the physical attack completely!`)
        }
    }
    this.takingMagicalAttack = function(damage) {
        const finalDamage = damage - this.mdefense;
        if (finalDamage > 0) {
            this.life -= finalDamage;
            console.log(`${this.name} took ${finalDamage} points of damage.`)
            console.log(`${this.name} has now ${this.life} points of life left.`)
        } else {
            console.log(`${this.name} defended from the magical attack completely!`)
        }
    }

    // Fight watcher function
    this.watchingFight = function() {
        console.log(`${this.name} watches the fight while cries for help.`)
    }
}

function Warrior(name, attack, life, pdefense, mdefense) {
    Character.call(this, name, life, pdefense, mdefense);

    this.attack = attack;
    this.improveAttack = function() {
        this.attack += 10;
        console.log(`${this.name} has improved his attack to ${this.attack} points!`)
    }
    this.physicalAttack = function(target) {
        console.log(`${this.name} attacked ${target.name} with ${this.attack} points of attack!`)
        target.physicalDefend();
        target.takingPhysicalAttack(this.attack);
    }
}

function Mage(name, mana, life, pdefense, mdefense) {
    Character.call(this, name, life, pdefense, mdefense);

    this.mana = mana;
    this.improvePhysicalDefense = function() {
        this.pdefense+= 20;
        console.log(`${this.name} has improved her physical defense to ${this.pdefense} points!`)
    }
    this.magicalAttack = function(target) {
        console.log(`${this.name} attacked ${target.name} with ${this.mana} points of mana!`)
        target.magicalDefend();
        target.takingMagicalAttack(this.mana);
    }
}

let prince = new Warrior('The Enchanted Prince', 80, 100, 70, 40);
let evilWitch = new Mage('The Evil Witch', 80, 60, 30, 70)
let princess = new Character('The Princess', 30, 20, 20);

prince.improveAttack();
evilWitch.improvePhysicalDefense();
prince.physicalAttack(evilWitch);
evilWitch.magicalAttack(prince);
princess.watchingFight();
