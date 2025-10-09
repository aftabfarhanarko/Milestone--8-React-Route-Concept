import React from "react";
import imgea from "../../assets/Frame.png";
import { NavLink } from "react-router";

const Book = ({ singleBook }) => {

  const { bookName,bookId, author, image, rating } = singleBook;

  return (
   <NavLink to={`/bookDetlise/${bookId}`}>
     <div className="card bg-base-100 w-96 shadow-sm">
      <div className="p-6 ">
        <figure className="p-6 bg-base-300 rounded-lg">
          <img className="h-[160px]" src={image} />
        </figure>
      </div>
      <div className="card-body">
        <div className="flex w-[200px]">
          <p className="text-green-600 text-md font-semibold">
            {singleBook.tags[0]}
          </p>
          <p className="text-green-600 text-md font-semibold">
            {singleBook.tags[1]}
          </p>
        </div>
        <h2 className="text-xl font-semibold">{bookName}</h2>
        <p className="text-lg font-medium">By : {author}</p>
        <div className="flex justify-between mt-3  border-t border-dashed border-base-300 pt-2 items-center">
          <div>
            <p className="text-lg font-semibold">Fiction</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg font-semibold">{rating}</p>
            <img src={imgea}></img>
          </div>
        </div>
      </div>
    </div>
   </NavLink>
  );
};

export default Book;
