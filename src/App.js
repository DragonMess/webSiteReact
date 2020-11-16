import "./App.css";
import Homepage from "./containers/homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/contact" component="" />
        <Route path="/soumission" component="" />
        <Route path="/a_propos" component="" />
      </Switch>
    </Router>
  );
}

export default App;
