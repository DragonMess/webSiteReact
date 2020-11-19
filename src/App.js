import "./App.css";
import Homepage from "./containers/homepage/index.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import PageContainer from "./containers/pageCointainer";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <PageContainer>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component="" />
            <Route path="/soumission" component="" />
            <Route path="/a_propos" component="" />
          </Switch>
        </PageContainer>
      </Router>
    </div>
  );
}

export default App;
