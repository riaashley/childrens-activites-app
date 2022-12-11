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


  return(
    <div>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/activities">
          <ActivitiesContainer activities={activities}/>
        </Route>
        <Route path="new">
          <AddForm />
        </Route>
      </Switch>
    </div>
  )
}
export default App;
