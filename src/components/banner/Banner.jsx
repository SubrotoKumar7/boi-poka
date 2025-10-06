import React from 'react';
import bookImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-7 justify-between items-center w-11/12 mx-auto py-20'>
            <div>
                <h1 className='text-4xl md:text-6xl font-bold mb-5 md:mb-10'>Books to freshen up your bookshelf</h1>
                <button className="btn btn-success text-white">View The List</button>
            </div>
            <div>
                <img className='rounded' src={bookImg} alt="books image" />
            </div>
        </div>
    );
};

export default Banner;