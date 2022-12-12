import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ActivityDetails(){
    const [activity, setActivity] = useState(null);
    const [heart, setHeart] = useState(false)
    const {id} = useParams();
 

    useEffect(() => {
        fetch(`http://localhost:3004/activities/${id}`)
            .then((r) => r.json())
            .then(data => setActivity(data))
    }, [])
    
    if (!activity) {
        return <div className="error">Error</div>
    }

    const {name, image, location, description, category} = activity

    return (
        <div className="details">
            <img src={image} alt="photo" width="55%" 
             />   
             <h1 className="activityName">{name}</h1>
             <h2>{location}</h2>
             <span>{category}</span>
             <p>{description}</p>
             { heart ? (
                 <button onClick={() => setHeart(false)}>
                 ♥
                 </button>
                ) : (
                 <button onClick={() => setHeart(true)}>
                 ♡
                 </button>
            )}
         </div>
     )
}

export default ActivityDetails;