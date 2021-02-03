import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className='app'>
        <Nav />
        <Switch>
          <Route path='/portfoliov2/about'>
            <About />
          </Route>
          <Route path='/portfoliov2/skills'>
            <Skills />
          </Route>
          <Route path='/portfoliov2/projects'>
            <Projects />
          </Route>
          <Route path='/portfoliov2/contact'>
            <Contact />
          </Route>
          <Route path='/portfoliov2/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
