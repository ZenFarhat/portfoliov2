import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
