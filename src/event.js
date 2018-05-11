const Database = require('../database');

class Event {
  constructor(params) {
    this.database = Database;
    this.req = req;
    this.res = res;
    this.params = req.params;
  }
  
  run() {
    res.json({ 'status': 'success' });
  }
}

module.exports = Event;
