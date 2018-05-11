const Database = require('../database');

class Books {
  constructor(req, res) {
    this.database = Database;
    this.req = req;
    this.res = res;
    this.params = req.params;
  }
  
  run() {
    this.database.mongo.db('shanaapp').collection("books").find().toArray((err, result) => {
      this.res.json(result);
    });
  }
}

module.exports = Books;
