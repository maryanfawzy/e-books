import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HighLights = ()=>{
    return(
      <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    why Choose <span className="purple">library</span>
                </h2>
                <div className="highlight__wrapper">
                    <div className="highlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon="bolt"/>
                        </div>
                        <h3 className="highlight__subtitle">Easy and Quick</h3>
                        <p className="highlight__para">
                            Get an accses
                        </p>
                    </div>
                    <div className="highlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon="book-open"/>
                        </div>
                        <h3 className="highlight__subtitle">Easy and Quick</h3>
                        <p className="highlight__para">
                            Get an accses
                        </p>
                    </div>
                    <div className="highlight">
                        <div className="highlight__img">
                            <FontAwesomeIcon icon="tags"/>
                        </div>
                        <h3 className="highlight__subtitle">Easy and Quick</h3>
                        <p className="highlight__para">
                            Get an accses
                        </p>
                    </div>

                </div>


            </div>

        </div>

      </section>
    )
}
export default HighLights ;
