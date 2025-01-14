import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Raiting from "./Raiting";
import Price from "./Price";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  if (!book) return null;  
  return (
    <div className="book">
      <Link to = {`/books/ ${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
        </Link>
      <div className="title">
        <Link to = {`/books ${book.id}`} className="book__title--link" >
          {book.title}
        </Link>
      </div>
      <div className="book__raiting">
       
     <Raiting rating= {book.rating}/> 
      
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
   
        
      </div>
    </div>
  );
};

export default Book;