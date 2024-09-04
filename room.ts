export class Room {
    name: string;
    description: string;
    exits: { [key: string]: Room };

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.exits = {};
    }

    connectRoom(direction: string, room: Room) {
        this.exits[direction] = room;
    }
}
