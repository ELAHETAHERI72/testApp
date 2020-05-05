module.exports = class Applicationconfig {
    // 
    // http://185.8.173.146:7070/
    constructor(serverAddress = 'http://127.0.0.1', delay = 80000) {
        this.serverAddress = serverAddress;
        this.delay = delay
    }


}