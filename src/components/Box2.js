import React from 'react';
import './styles/Box.css';

function Box2(props){

    const [name, setName] = React.useState(props.name);
    const [age, setAge] = React.useState(props.age);
    const [color, setColor] = React.useState(props.color);

    return(
        <div className="box1">
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.color}</div>
        </div>
    );
}

export default Box2;