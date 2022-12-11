import React from "react";

function ActivityCard({ activity }) {
    const { image } = activity
    return (
        <div className="activity-card">
            <img src={image} alt="photo" width="75%"
            />
        </div>
    )
}

export default ActivityCard;