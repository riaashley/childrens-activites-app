import React, { useState, useEffect } from "react";
import Home from "./Home";
import ActivitiesContainer from "./ActivitiesContainer";
import AddForm from "./AddForm";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  const[activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/activities")
      .then((r) => r.json())
      .then(setActivities)
  }, []);

  function deleteActivity(id) {
    const updatedList = activities.filter((activity) => activity.id !== id)
    setActivities(updatedList)
  }


  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/activities">
          <ActivitiesContainer activities={activities} deleteActivity={deleteActivity} />
        </Route>
        <Route exact path="new">
          <AddForm />
        </Route>
      </Switch>
    </div>
  )
}
export default App;
