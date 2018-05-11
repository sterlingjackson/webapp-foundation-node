const Database = require('../database');

class Users {
  constructor(req, res) {
    this.database = Database;
    this.req = req;
    this.res = res;
    this.params = req.params;
  }
  
  run() {
    if (this.params.userId) {
      return { 'id': this.params.userId };
    }
    else {
      return { 'id': [1, 2, 3, 4, 5] };
    }
  }
}

module.exports = Users;
