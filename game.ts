import { Player } from './player';
import { Room } from './room';

export class Game {
    player: Player;
    rooms: Room[];

    constructor() {
        this.player = new Player('Hero');
        this.rooms = this.createRooms();
    }

    createRooms(): Room[] {
        const room1 = new Room('Living Room', 'A cozy living room with a warm fireplace.');
        const room2 = new Room('Kitchen', 'A kitchen with a smell of freshly baked bread.');
        room1.connectRoom('north', room2);
        room2.connectRoom('south', room1);

        return [room1, room2];
    }

    start() {
        console.log("Welcome to the Adventure Game!");
        this.player.currentRoom = this.rooms[0];
        this.mainLoop();
    }

    mainLoop() {
        let command: string | null = '';
        while (command !== 'exit') {
            console.log(`You are in the ${this.player.currentRoom.name}.`);
            command = prompt('> ');
            if (command) {
                this.processCommand(command);
            }
        }
        console.log("Thanks for playing!");
    }

    processCommand(command: string) {
        const [action, target] = command.split(' ');

        switch (action) {
            case 'look':
                console.log(this.player.currentRoom.description);
                break;
            case 'go':
                if (target) {
                    this.player.move(target);
                } else {
                    console.log("Go where?");
                }
                break;
            default:
                console.log("Unknown command.");
        }
    }
}
