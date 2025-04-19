import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../Utility/AddToDB';

// sweetaleart impot 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)


const BookDetails = () => {

    const id = useParams();
    const convertId = (id.Id);
    const bookId = parseInt(convertId)

    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    console.log(singleBook);

    const { bookName, image, publisher, rating, review, totalPages, yearOfPublishing, tags } = singleBook;


    // read button handle 
    const handleReadbtn = (bookId) => {


        // set wseetalert2 
        Swal.fire({
            title: "Good job!",
            text: "You added this book your read list!",
            icon: "success"
          });

        addToStoreDB(bookId);

    }


    return (
        <div className="md:card md:card-side bg-base-100 shadow-md mt-16">
            <div className='card card-side md:w-[50%]'>
                <img src={image} alt="book image" className='py-28 px-10 md:py-20 md:px-24 bg-[#f1faee] ' />
            </div>
            <div className=" md:w-[50%] p-4">
                <h2 className="card-title text-6xl mb-6">{bookName}</h2>
                <p className='text-gray-600 text-2xl my-2'>By : {publisher}</p>
                <p className='text-gray-600 text-2xl py-2 my-6 border-y border-solid'>Fiction</p>
                <div>
                    <h3 className='text-gray-600 my-4 text-xl'> <span className='font-bold text-2xl'>Review </span>: {review}</h3>
                    <div className="flex justify-start items-center gap-4">
                        <h3 className='my-6'>Tag</h3>
                        {
                            tags.map(tag => <button key={singleBook.bookId} className="bg-[#f1faee] text-green-600 py-1 px-4 rounded-md my-6"> #{tag}</button>)
                        }
                    </div>
                    <div className='text-xl text-gray-600'>
                        <p>Number of Pages : <span className='text-[#00509d] font-bold'>{totalPages}</span></p>
                        <p>Publisher : <span className='text-[#00509d] font-bold'>{publisher}</span></p>
                        <p>Year of Publishing : <span className='text-[#00509d] font-bold'>{yearOfPublishing}</span></p>
                        <p>Rating : <span className='text-[#00509d] font-bold'>{rating}</span></p>
                    </div>
                    <button onClick={() => handleReadbtn(bookId)} className='p-4 btn mr-8 mt-4'>Read</button>
                    <button className='btn p-4 mt-4 btn-success text-white'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;