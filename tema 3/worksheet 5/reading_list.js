//Ejercicio reading list

class BookList{
    constructor(numbooks, notnumbooks, nextbook, currentbook, lastbook, allbooks)
    {
        this.numbooksreaded = numbooks;
        this.booksnotreaded = notnumbooks;
        this.nextbook = nextbook.Book;
        this.currentbook = currentbook.Book;
        this.lastbook = lastbook.Book;
        this.listbooks = allbooks.Book;
    }
    add(book)
    {
        this.listbooks.push(book);
        console.log('Libro' + book +'añadido, lista de libros:' + this.listbooks);
    }

    /* finishCurrentBook()
    {
        this.currentbook.push(book)
        console.log('Libro' + book +'añadido, lista de libros:' + this.listbooks);
    } */

}


class Book{
    constructor(title, genre, author, read, read_date) {

    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.read_date = read_date;
    }

}

let libro0 = new Book('Libro_num_0', 'aventura', 'Lorca', 'False', '10-11-20');
let libro1 = new Book('Libro_num_1', 'terror', 'Lorca', 'True', '10-7-20');
let libro2 = new Book('Libro_num_2', 'accion', 'Lorca', 'True', '10-9-20');
let libro3 = new Book('Libro_num_2', 'accion', 'Lorca', 'True', '10-9-20');



let lista1 = new BookList(0, 2, libro2, libro1, libro0, []);
lista1.add(libro3);


