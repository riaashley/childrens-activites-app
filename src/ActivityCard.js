import React from "react";

function ActivityCard({ activity }) {
    const { image, name} = activity
    return (
        <div className="activity-card">
            <img src={image} alt="photo" width="75%"
            />
            <h1>{name}</h1>
        </div>
    )
}

export default ActivityCard;