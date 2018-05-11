'use strict'

class Books {
  constructor() {
    this.books = [ { 'title': 'A Tale of Two Cities' }, { 'title': 'The Mysterious Island' }, { 'title': 'A Brave New World' }];
  }
  
  response() {
    return this.books;
  }
}

module.exports = Books;
