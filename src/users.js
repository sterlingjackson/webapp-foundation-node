class Users {
  constructor(params) {
    this.params = params;
  }
  
  response() {
    return { 'id': this.params.userId };
  }
}

module.exports = Users;
