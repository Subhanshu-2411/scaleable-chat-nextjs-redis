import { Server } from 'socket.io';

class SocketService {

    private _io: Server;

    constructor() {
        console.log("Socket Server Initialised");
        this._io = new Server();
    }
}