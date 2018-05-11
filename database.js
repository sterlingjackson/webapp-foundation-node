const MongoClient = require('mongodb').MongoClient;

class Database {
  constructor() {
    this.database = 'mongodb://localhost:27017/shanaapp';
    MongoClient.connect(this.database).then(db => {
      this.mongo = db;
    });
  }
}

module.exports = new Database();
