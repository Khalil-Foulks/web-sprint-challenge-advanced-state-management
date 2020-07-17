import React, { useEffect } from 'react'

const SmurfList = props => {

    const { fetchSmurfs, smurfs, isLoading, error } = props

    useEffect(() => {
        fetchSmurfs();
    }, [])

    return(
        <div className="wrapper">
            {isLoading && <h4>Loading Smurfs..</h4>}
            {error && (
                <p className='error'>Uh oh, something happened... {props.error}</p>
            )}
            {smurfs && (
                <div 
                    className="container" 
                    style={{display: "flex", flexWrap:"wrap", justifyContent: "space-evenly"}}
                >
                    {smurfs.map(smurf =>(
                        <div 
                        key = {smurf.id} 
                        className = "card"
                        style={{
                            border:"1px solid black", 
                            boxShadow:'0 3px 5px 2px rgba(255, 105, 135, .3)',
                            padding: '80px 30px',
                            width: '400px',
                            
                        }}
                        >
                            <div>
                                <span>Name:</span> {smurf.name}
                            </div> 
                            <p> <span>Age:</span> {smurf.age} </p>
                            <p> <span>Height:</span> {smurf.height}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SmurfList