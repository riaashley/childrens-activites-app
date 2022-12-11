import React from "react";
import { Link } from "react-router-dom";
import ActivityDetails from "./ActivityDetails";

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
            <button onClick={handleDelete}>
                Remove
            </button>
            <div>
                <Link className="details" to={`activities${activity.id}`}>{name}</Link>
            </div>
        </div>
    )
}

export default ActivityCard;