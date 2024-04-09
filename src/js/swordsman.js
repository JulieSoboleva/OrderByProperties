import Character from "./character";

export default class Swordsman extends Character {
    constructor(name) {
        super(name, "Swordsman", 40, 10);
    }
}

const person = new Swordsman("Ivan");
console.log(person.orderByProps(['name', 'level']));
