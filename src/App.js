import "./App.css";
import Homepage from "./containers/homepage/index.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import PageContainer from "./containers/pageCointainer";
import Soumission from "./containers/soumission";
import Contact from "./containers/contact";
import Apropos from "./containers/apropos/index.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <PageContainer>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component={Contact} />
            <Route path="/apropos" component={Apropos} />
            <Route path="/soumission" component={Soumission} />
            <Link to="./#service"></Link>
          </Switch>
        </PageContainer>
      </Router>
    </div>
  );
}

export default App;
