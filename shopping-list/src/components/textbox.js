import React, { useState } from "react";

function TextBox(props){
//set use state
//handle submit form
//handle the onChange

    const [ item, setItem ] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit(item);
        setItem('');
    }

    const handleChange = event => {
        setItem(event.currentTarget.value);
    }

    return (
        <form
            onSubmit={handleSubmit}>
            <input
                value={item}
                type="text"
                onChange={handleChange}/>
            <button>SUBMIT IT!</button>
        </form>
    )
}

export default TextBox;