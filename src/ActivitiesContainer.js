import React from "react";
import ActivityCard from "./ActivityCard";

function ActivitiesContainer({ activities }) {
    return (
        <div>
            {activities.map((activity) =>
            <ActivityCard key={activity.id} activity={activity} />)}
        </div>
    )
}

export default ActivitiesContainer;