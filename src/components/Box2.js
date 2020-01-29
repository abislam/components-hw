import React from 'react';
import './styles/Box.css';

function Box2(props){

    //const name = React.useState(props.name);
    const [age, setAge] = React.useState(props.age);
    //const color= React.useState(props.color);

    return(
        <div className="box1" onClick={()=> setAge(age+1)}>
            <div>Name: {props.name}</div>
            <div>I am {age} years old</div>
            <div>The coolest color is {props.color}</div>
        </div>
    );

}

export default Box2;