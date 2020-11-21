import "./App.css";
import Homepage from "./containers/homepage/index.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import PageContainer from "./containers/pageCointainer";
import Footer from "./components/footer";
import Soumission from "./containers/soumission";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <PageContainer>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component="" />
            <Route path="/soumission" component={Soumission} />
            <Route path="/a_propos" component="" />
            <Link to="./#service"></Link>
          </Switch>
        </PageContainer>
      </Router>
    </div>
  );
}

export default App;
