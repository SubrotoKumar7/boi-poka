import React from "react";
import { FaStar } from "react-icons/fa";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const {bookId, author, bookName, image, category, review, tags, rating } = singleBook;
  
  return (
    <div id={bookId} className="card bg-base-100 shadow-lg border border-gray-200 cursor-pointer hover:scale-105">
      <figure className="mx-auto pt-3 h-[300px] object-cover">
        <img className="w-50 mx-auto h-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{category}</div>
          <div className="flex gap-1 items-center">{rating} <FaStar fill="orange" /></div>
        </h2>
        <p>{review.split('.').slice(0,2).join('.') + '.'}</p>
        <h3 className="font-semibold text-lg">{author}</h3>
        <div className="card-actions justify-end">
            {
                tags.map((tag, i) => <div key={i} className="badge badge-outline">{tag}</div>)
            }
          
        </div>
      </div>
    </div>
  );
};

export default Book;
