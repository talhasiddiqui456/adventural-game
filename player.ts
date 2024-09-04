import { Room } from './room';

export class Player {
    name: string;
    currentRoom: Room | null;

    constructor(name: string) {
        this.name = name;
        this.currentRoom = null;
    }

    move(direction: string) {
        if (this.currentRoom && this.currentRoom.exits[direction]) {
            this.currentRoom = this.currentRoom.exits[direction];
            console.log(`You move ${direction} to the ${this.currentRoom.name}.`);
        } else {
            console.log("You can't go that way.");
        }
    }
}
