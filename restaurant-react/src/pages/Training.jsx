import React from "react";
import data from "../data/training_data"

function Training() {
    return (
            <>
                <div className="training__container-text">
                    <div className="upper-text">
                    <p>
                        After spending almost a decade perfecting my craft  in japan, i bestowed 
                        upon myself the quest to help my fellow citizen  to
                        get <br/>accustomed with the japaneses culture and lore
                    </p>
                    </div>
                    <div className="lower-text">
                        <p>
                            From Ramen to tempura, my course will take you through all the secrets that 
                            the japaneses cuisine has to offer. You will also learn how to add a mauritian
                            twist to all your dishes to take them to a completely new peak. Do not hesitate 
                            and take a look at our different curriculums 
                        </p>
                    </div>
                    
                    <div className="trainer-img"></div>
                </div>
                <div className="sy-text">Package  price below  </div>
                <div className="training__container--card">
                    <div className="package-card tempura">
                        <div className="card-logo"><img src={data[0].logo} alt=""/></div>
                        <div className="perks">
                            <ul>
                                <li className="valid">Online video</li>
                                <li className="not-valid">Ingredients</li>
                                <li className="not-valid">Utensils</li>
                                <li className="valid">Theoretical studies</li>
                                <li className="not-valid">Networking</li>
                                <li className="not-valid">Extra-curriculum activities</li>
                                <li className="valid">Physical meetups</li>
                            </ul>
                        </div>
                        <div className="buy-now">Buy now</div>
                    </div>
                    <div className="package-card ramen">
                        <div className="card-logo"><img src={data[1].logo} alt=""/></div>
                        <div className="perks">
                            <ul>
                                <li className="valid">Online video</li>
                                <li className="valid">Ingredients</li>
                                <li className="valid">Utensils</li>
                                <li className="valid">Theoretical studies</li>
                                <li className="not-valid">Networking</li>
                                <li className="not-valid">Extra-curriculum activities</li>
                                <li className="valid">Physical meetups</li>
                            </ul>
                        </div>
                        <div className="buy-now">Buy now</div>
                    </div>
                    <div className="package-card sushi">
                        <div className="card-logo"><img src={data[2].logo} alt=""/></div>
                        <div className="perks">
                            <ul>
                                <li className="valid">Online video</li>
                                <li className="valid">Ingredients</li>
                                <li className="valid">Utensils</li>
                                <li className="valid">Theoretical studies</li>
                                <li className="valid">Networking</li>
                                <li className="valid">Extra-curriculum activities</li>
                                <li className="valid">Physical meetups</li>
                            </ul>
                        </div>
                        <div className="buy-now">Buy now</div>
                    </div>
                </div>
            </>

    )
}

export default Training