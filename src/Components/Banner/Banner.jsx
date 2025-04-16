import React from 'react';
import book from '../../assets/book.jpg'

const Banner = () => {
    return (
        <div className='flex items-center justify-between my-12 px-12 md:px-24 py-12 bg-[#f28482] rounded-xl mx-1 md:mx-0'>
            <div>
                <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl text-white'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#f6bd60] text-[#293241] my-6 border-none'>View The List</button>
            </div>
            <div>
                <img className='w-64' src={book} alt="" />
            </div>
        </div>
    );
};

export default Banner;