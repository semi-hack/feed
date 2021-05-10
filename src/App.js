import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import Services from './components/Services/Service'
import Review from './components/review/review';
import About from './components/aboutUs/about';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/getStarted';

function App() {
  return (
     <Router>
     <Navbar />
     
      <Switch>
        <Route path='/' exact > 
        <Hero />
        <Service />
        <Review />
        <GetStarted />
        </Route>
        <Route path='/about' exact>
         <About />
        </Route>
        <Route path="" exact>
          <Services />
        </Route>
        <Route path="/contact" exact>
         <Contact />
        </Route>
      </Switch>
      <Footer />
     </Router>
  );
}

export default App;
