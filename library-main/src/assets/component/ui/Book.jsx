import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Raiting from "./Raiting";
import Price from "./Price";
import { Link } from "react-router-dom";
import Ratings from "./Raiting";

// const Book = ({ book }) => {
//   if (!book) return null;  
//   return (
//     <div className="book">
//       <Link to = {`/books/ ${book.id}`}>
//         <figure className="book__img--wrapper">
//           <img src={book.url} alt="" />
//         </figure>
//         </Link>
//       <div className="title">
//         <Link to = {`/books ${book.id}`} className="book__title--link" >
//           {book.title}
//         </Link>
//       </div>
//       <div className="book__raiting">
       
//      <Raiting rating= {book.rating}/> 
      
//       <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
   
        
//       </div>
//     </div>
//   );
// };




// export default Book;




const Book = ( { book }) => {
  const [img, setImg] = useState();

  // const mountedRef = useRef(true)

  useEffect(() => {
      const image = new Image();
      image.src = book.url
      image.onload = () => {
          // if (mountedRef.current){
              setImg(image);
          // }
      }
      return () => {
          // mountedRef.current = false
      }
  })

  return (
      <div className="book">
          {
              img ?
              <>
              <Link to={`/books/${book.id}`}> 
              <figure className='book__img--wrapper'>
                  <img src={img.src} alt="" className="book__img"/>
              </figure>
          </Link>
          <div className="book__title">
              <Link to={`/books/${book.id}`} className='book__title--link'>
                  {book.title}
              </Link>
          </div> 
          <Ratings rating={book.rating}/>
          <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
          </> 
          : 
          <>
          <div className="book__img--skeleton">
              <div className="skeleton book__title--skeleton"></div>
              <div className="skeleton book__rating--skeleton"></div>
              <div className="skeleton book__price--skeleton"></div>
          </div></>
          }
          
          
      </div>
  );
}

export default Book;