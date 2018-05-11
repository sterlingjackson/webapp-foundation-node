'use strict'

class Books {
  constructor(params) {
    this.params = params;
    this.books = [ { 'title': 'A Tale of Two Cities' }, { 'title': 'The Mysterious Island' }, { 'title': 'A Brave New World' }];
  }
  
  response() {
    return this.books;
  }
}

module.exports = Books;
