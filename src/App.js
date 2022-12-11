import React, { useState, useEffect } from "react";
import Home from "./Home";
import ActivitiesContainer from "./ActivitiesContainer";
import AddForm from "./AddForm";

function App() {
  const[activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/activities")
      .then((r) => r.json())
      .then(setActivities)
  }, []);


  return(
    <div>
      <Home />
      <ActivitiesContainer activities={activities}/>
      <AddForm />
    </div>
  )
}
export default App;
