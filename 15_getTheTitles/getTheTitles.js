const books = [
  { title: 'Book One', author: 'Author A' },
  { title: 'Book Two', author: 'Author B' }
];

const getTheTitles = function(array) {
    return array.map( function(book){
        book.title
    });
};
getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
