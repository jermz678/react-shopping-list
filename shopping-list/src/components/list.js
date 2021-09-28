import React, { useState } from 'react';
import TextBox from './textbox';


function CreateList(){

const [ list, setList ] = useState([]);

const addItem = item => {
    const newList = [item, ...list];
    setList(newList);
}


    return (
        <div>
            <TextBox onSubmit={addItem}/>
            <ul>
                {list.map((shoppingItem) => (
                    <li>{shoppingItem}
                        <button>DELETE</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CreateList;