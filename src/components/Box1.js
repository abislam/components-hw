import React from 'react';
import './styles/Box.css';
function Box1(){

    const [name, setName] = React.useState("Abed")

    return(
        <div className="box1">{name}</div>
    );
}

export default Box1;