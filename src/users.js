'use strict'

class Users {
  constructor(params) {
    this.params = params;
  }
  
  response() {
    return `View User: ${this.params.userId}`;
  }
}

module.exports = Users;
