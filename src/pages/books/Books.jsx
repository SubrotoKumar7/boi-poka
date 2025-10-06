import React, { Suspense } from 'react';
import Book from '../book/Book';

const Books = ({data}) => {
    return (
        <div className='w-11/12 mx-auto py-20'>
            <h1 className='text-2xl text-center font-bold mb-7'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                    {
                        data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;