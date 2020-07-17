import React, { useState } from 'react';

const Form = props => {
    
    const { addSmurfs } = props
    
    const initialState = {
        id: Date.now(),
        name:'',
        age: '',
        height: ''
    }

    const [newSmurfs, setNewSmurfs] = useState(initialState);

    const handleChange = e =>{
        setNewSmurfs(
            {
                ...newSmurfs,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = e => {
        e.preventDefault();
        addSmurfs(newSmurfs)
        setNewSmurfs(initialState)
    }


    return(
        <form onSubmit={handleSubmit}>
                <input type='text' 
                    name='name' 
                    placeholder='Name' 
                    value={newSmurfs.name} 
                    onChange={handleChange}    
                />
                <input type='number' 
                    name='age' 
                    placeholder='Age' 
                    value={newSmurfs.age} 
                    onChange={handleChange}
                />
                <input type='text' 
                    name='height' 
                    placeholder='Height in cm' 
                    value={newSmurfs.height} 
                    onChange={handleChange}
                />
                <button type='sumbit'>Add Smurf</button> 
        </form>
    )
}


export default Form