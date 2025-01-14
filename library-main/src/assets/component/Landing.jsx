
import undrawBooks from "../Undraw_Books.svg"


import React from "react";
const Landing = ()=>{
    return(
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>America most awrded liberary .
                        </h1>
                        <h2>
                            Find your dream book with <span className="purple">library</span>
                        </h2>
                        <a href="#features">
                            <button className="btn">Browes Books
                            </button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={undrawBooks} alt="" />

                    </figure>

                </div>

            </header>

        </section>
    )
}
export default Landing;