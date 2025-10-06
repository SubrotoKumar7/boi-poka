import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setLSData } from '../../utils/LS';
import { ToastContainer } from 'react-toastify';

const BookDetails = () => {
    const {id} = useParams();
    const bookData = useLoaderData();
    const matchBook = bookData.find(book=> book.bookId === Number(id));
    const {author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing} = matchBook;

    const handleReadList = (id) => {
        setLSData(id);
    }

    return (
        <div className='w-11/12 mx-auto flex justify-between gap-10 py-15'>
            <div className='flex-1/2'>
                <img src={image} alt={bookName} />
            </div>
            <div className='flex-1/2'>
                <h1 className='text-3xl font-bold mb-4'>{bookName}</h1>
                <h3 className='font-semibold'>By: { author}</h3>
                <div className="divider"></div>
                <h3 className='text-lg font-semibold'>{category}</h3>
                <div className="divider"></div>
                <p className='mb-3'><span className='font-bold'>Review:</span> {review}</p>
                <p><span className='font-bold'>Tags:</span> {tags.map((tag, i) => <button className='btn ml-2 text-green-500' key={i}>{tag}</button>)}</p>
                <div className="divider"></div>
                <div className='space-y-5'>
                    <p className='flex justify-between w-1/2'><span>Number of Pages:</span> <span className='font-bold'>{totalPages}</span></p>
                    <p className='flex justify-between w-1/2'>Publisher: <span className='font-bold'>{publisher}</span></p>
                    <p className='flex justify-between w-1/2'>Year of Publishing: <span className='font-bold'>{yearOfPublishing}</span></p>
                    <p className='flex justify-between w-1/2'>Rating: <span className='font-bold'>{rating}</span></p>
                </div>
                <div className='flex gap-3 my-4'>
                    <button onClick={()=> handleReadList(id)} className="btn">Read</button>
                    <button className="btn btn-info text-white">Wishlist</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BookDetails;