import React, { useEffect } from 'react'

const Mount = () => {

    useEffect(() => {
        
        console.log("Component mounted!");
    
    }, []);

    return (
        <div>
            <h2>Runs only once when mounted!</h2>
        </div>
    )
}

export default Mount
