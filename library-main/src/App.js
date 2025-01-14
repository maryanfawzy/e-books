import "./App.css";
import Nav from "./assets/component/nav";
import Footer from "./assets/component/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Books from './Pages/Books'

import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }
  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id
        ? {
          ...item,
          quantity: +quantity
        }
        : item
    ))
  }

  function removeBook(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter=0;
    cart.forEach((item) => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    // <Router>
    //   <div className="App">
    //     <Nav />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/books" element={<Books books={books} />} />
    //       <Route path ='/books/:id' element={<BookInfo books={books} />}/>
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>
    // <Router>
    //   <Routes/>
    //   <div className="App">
    //     <Nav numberOfItems={numberOfItems} />
    //     <Route path="/" exact component={Home} />
    //     <Route path="/books" exact render={() => <Books books={books} />} />
    //     <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
    //     <Route path="/cart" render={() => <cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook} />} />
    //     <Footer />
    //   </div>
    //   <Routes/>
    // </Router>

    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path ='/books/:id' element={<BookInfo books={books} />}/>
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;

