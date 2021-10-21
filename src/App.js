import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={About} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/portfolio" exact={true} component={Portfolio} />
        <Route path="/resume" exact={true} component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
