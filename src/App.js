import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "components/users";
import Articles from "pages/refs/article";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Users} />
      <Route path="/" component={Articles} />
    </div>
  );
}

export default App;
