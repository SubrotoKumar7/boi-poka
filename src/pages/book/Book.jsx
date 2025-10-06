import React from "react";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const {bookId, author, bookName, image, category, review, tags } = singleBook;
  
  return (
    <div id={bookId} className="card bg-base-100 shadow-lg">
      <figure className="w-50 mx-auto">
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{category}</div>
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
