import React from "react";

function ActivityCard({ activity }) {
    const { image, name} = activity

    function handleDelete(){
        
    }

    return (
        <div className="activity-card">
            <img src={image} alt="photo" width="75%"
            />
            <h1>{name}</h1>
            <button onClick={handleDelete}>
                Remove
            </button>
        </div>
    )
}

export default ActivityCard;