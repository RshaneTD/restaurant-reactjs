import React from "react";
import { Link } from "react-router-dom";
import data from '../data/menu_data/main'
import Main from '../components/carte'

function Menu() {
    return (
        <>
        
            <div className="menu-text">
                <p>
                    This the menu section dedicated to our most praise artisanal <br/>
                    preparation. Although the  recipes mat seem 
                    unorthodox at first sight, <br/> their taste is something to behold.
                </p>
            </div>
           <Main data={data}/>

            <div className="buttons">
                <Link to="/Drinks"><button>Drinks</button></Link>
                <Link to="/IceCream"><button>Ice-cream</button></Link>
            </div>
        </>
    )
}

export default Menu

