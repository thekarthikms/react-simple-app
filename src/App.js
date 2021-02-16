import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Shop from  './components/Shop'
import Register from './components/Register'
import Contact from './components/Contact'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import store from "./redux/store"
import { Provider } from "react-redux"

function App() {
  return (
  <Provider store={store} >
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact/>
             <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
          </Switch>
       </Router>
      </header>
    </div>
    </Provider>
  );
}

export default App;
