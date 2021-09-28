import React, { useState } from "react";

function TextBox(props){
//set use state
//handle submit form
//handle the onChange

    const [ item, setItem ] = useState("");

    const [ store, setStore ] = useState("");

    const [ number, setNumber] = useState();

    const storeArray = [
        "Aldi",
        "Walmart",
        "Woodmans"
    ];

    const amount = 10;

    const numberHolder = Array.from(Array(amount + 1).keys()).slice(1);

    let initialIndex = 1;

    const handleSubmit = event => {
        event.preventDefault();
        //add an object containing index number, item, changing amount, delete button, and store
        props.onSubmit({
            index: initialIndex,
            number: number,
            text: item,
            store: store
        });
        initialIndex++;
        setItem('');
    }

    const handleChange = event => {
        setItem(event.currentTarget.value);
    }

    const handleStoreChoice = event => {
        setStore(event.currentTarget.value)
    }

    const handleNumberChoice = event => {
        setNumber(event.currentTarget.value)
    }

    return (
        <form
        //need to add an amount and a store choice
            onSubmit={handleSubmit}>
            <label for="number">How Many</label>
            <select  onChange={handleNumberChoice} 
                name="number">
                {numberHolder.map((chosenNumber) => (
                <option value={chosenNumber}>{chosenNumber}</option> 
            ))}
            </select>
            <input
                value={item}
                type="text"
                onChange={handleChange}/>
            <label for="stores">Select Your Store</label>
            <select onChange={handleStoreChoice} 
                name="stores">{storeArray.map((chosenStore) => (
                <option value={chosenStore}>{chosenStore}</option> 
            ))}
            </select>

            <button>SUBMIT IT!</button>
        </form>
    )
}

export default TextBox;