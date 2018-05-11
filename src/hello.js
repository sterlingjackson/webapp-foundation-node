const Database = require('../database');

class Hello {
  constructor(req, res) {
    this.database = Database;
    this.req = req;
    this.res = res;
    this.params = req.params;
  }
  
  run() {
    this.res.json({ 'response': 'hello!' });
  }
}

module.exports = Hello;
