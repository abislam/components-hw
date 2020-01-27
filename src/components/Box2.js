import React from 'react';
import './styles/Box.css';

function Box2(props){

    //const name = React.useState(props.name);
    const [age, setAge] = React.useState(props.age);
    //const color= React.useState(props.color);

    return(
        <div className="box1">
            <div>Name: {props.name}</div>
            <div onClick={()=> setAge(age+1)}>Age: {age}</div>
            <div>Favorite Color: {props.color}</div>
        </div>
    );

}

export default Box2;