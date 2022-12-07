import React from "react";

function contactUs(props) {

    return (
            <div className="form-container">
                <div className="form-element">
                    <p className="email-address">ICHIRAKU@ramengmail.com</p>
                    <p className="tel">+250 55555555</p>
                    <div className="email-info">
                        <label for="email">email</label>
                        <input type="email" />
                    </div>
                        <textarea className="text-area" name="" id="" cols="30" rows="10" placeholder="Click on summit to send or to cancelrepetitionnd go back"> 
                        </textarea>
                    <button className="summit" id="summit" type="submit" onClick={() =>props.cancel()}>submit/cancel</button>
                </div>
            </div>
    )
}

export default contactUs 