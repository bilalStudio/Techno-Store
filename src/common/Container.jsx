import React from 'react';
import Header from "./Header";

function Container(props) {
    return (
        <>
        {/* <Header/> */}
            <div className="boxed style1">
            <div class="overlay" style={{opacity: "0", display: "none"}}/>
              <Header/>
              
              {props.children}


            </div>
        </>
    );
}

export default Container;