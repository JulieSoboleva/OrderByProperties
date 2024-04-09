export default class Character {
    constructor(name, type, attack, defence, health=100, level=1) {
        if (name.length < 2 || name.length > 10) {
            throw new Error("Имя должно иметь от 2 до 10 символов");
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error("Не корректный тип персонажа");
        }
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error("Нельзя повысить левел умершего");
        }
        this.level += 1;
        this.attack += 0.2 * this.attack;
        this.defence += 0.2 * this.defence;
        this.health = 100;
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }

    orderByProps(seq) {
        let arr = [];
        for (const [key, value] of Object.entries(this)) {
            arr.push({key: key, value: value});
        }
        arr.sort((a, b) => a.key > b.key ? 1 : -1);
        for (let i = seq.length-1; i > -1; i--) {
            let index = arr.findIndex(item => item.key === seq[i]);
            arr.unshift(...arr.splice(index, 1));
        }
        return arr;
    }
}
