'use strict'

class Hello {
  constructor(params) {
    this.params = params;
  }
  
  response() {
    return { 'response': 'Hello!' };
  }
}

module.exports = Hello;
