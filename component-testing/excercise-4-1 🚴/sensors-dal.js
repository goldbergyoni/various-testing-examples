const events = [];

//a very simplistic DAL, replace with real MongoDB when my calendar will permit
module.exports = class sensorsDAL {
    constructor() {}

    async addSensorsEvent(event) {
        return new Promise((resolve, reject) => {
            setImmediate(() => {
                event.id = Math.ceil(Math.random() * 100000);
                events.push(event);
                resolve(event);
            })
        });
        
    }

    async getEvents() {
        return new Promise((resolve, reject) => {
            setImmediate(() => {
                resolve(events);
            })
        });
    }
}