import React, {useState} from "react";

function OnlyComponent(props){
    const [number, changeNumber]= useState(20);
    const [name, changeName]= useState("Kalista");
    const [color, changeColor]= useState("Blue");



    return(
        <div className="details">
            <p>Name: {props.name}</p>
            <p onClick={function () {
                changeNumber(number + 1)
            }} className="age">I am {number} years old</p>
            <p>The coolest color is {color}</p>
        </div>
    )
}




export default OnlyComponent;
