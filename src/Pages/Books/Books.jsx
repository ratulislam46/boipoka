import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ books }) => {

    // json data handle way - 01
    // const [allBooks, setAllBooks] = useState([]);

    // useEffect ( () => {
    //     fetch('books.json')
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data))
    // }, []);


    // json data handle way - 02 (loader) 
    // console.log(books);

    return (
        <div>
            <h1 className='text-center my-6 font-bold text-2xl'>Books</h1>
            {/* <Book allBooks={allBooks}></Book> */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <Suspense>
                    {
                        books.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;