import React from 'react';
import SecondHeader from '../header/Header';
import Footer from '../footer/Footer'

const Container=(props)=> {
    return (
        <div className="boxed style1">
            <div className="overlay" style={{opacity: "0", display: "none"}}/>
              <SecondHeader className={props.className} bool={props.bool} />
              {props.children}
              <Footer/>
            </div>
    );
}

export default Container;