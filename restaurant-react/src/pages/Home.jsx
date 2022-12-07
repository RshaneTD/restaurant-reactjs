import React from "react";
import { Link } from "react-router-dom";



function Home() {
    return(
        <>
            <section className="hero-grid background">
                    <div className="hero">
                        <h1>ICHIRAKU</h1>
                        <div className="btn">
                            <Link to="Menu"><button>Dine-in</button></Link>
                            <Link to="Menu"><button>Delivery</button></Link>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Home