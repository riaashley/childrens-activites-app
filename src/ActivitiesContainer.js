import React from "react";
import ActivityCard from "./ActivityCard";

function ActivitiesContainer({ activities, deleteActivity }) {
    return (
        <div className="activities-list">
            {activities.map((activity) =>
            <ActivityCard key={activity.id} activity={activity} deleteActivity={deleteActivity} />
            )}
        </div>
    )
}

export default ActivitiesContainer;