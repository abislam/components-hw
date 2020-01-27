import React from 'react';
import './styles/Box.css';
function Box1(){

    const name = React.useState("Abed")

    return(
        <div className="box1">{name}</div>
    );
}

export default Box1;