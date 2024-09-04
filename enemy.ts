
export class Enemy {
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }

    attack() {
        console.log(`${this.name} attacks!`);
    }
}
