'use strict'

class Event {
  constructor(params) {
    this.params = params;
  }
  
  response() {
    return { 'status': 'success' };
  }
}

module.exports = Event;
