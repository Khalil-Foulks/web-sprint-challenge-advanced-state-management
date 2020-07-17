import React, { useEffect } from 'react'

const SmurfList = props => {

    const { fetchSmurfs, smurfs, isLoading, error } = props

    useEffect(() => {
        fetchSmurfs();
    }, [])

    return(
        <div>
            <h2>Smurf Component Renders</h2>
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
                        <div key = {smurf.id}>
                            <div>
                                {smurf.name}
                            </div> 
                            <p>{smurf.age}</p>
                            <p>{smurf.height}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SmurfList