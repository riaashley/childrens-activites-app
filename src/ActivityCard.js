import React from "react";

function ActivityCard({ activity, deleteActivity }) {
    const { image, name, id } = activity

    function handleDelete(){
        fetch(`http://localhost:3004/activities/${id}`, {
            method: "DELETE"
        })
            .then((r) => r.json())
            .then(() => deleteActivity(id))
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