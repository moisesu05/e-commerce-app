import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'

//TODO: 1:16:29 TUTOR
function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
        <Header />

        <Switch>
        
          <div className="p-3">
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

            <Route path='/products/:id'>
              <Product />
            </Route>
          </div>
        
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
