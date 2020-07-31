import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import LandingPage from './landingpage';
import AboutUs from './about_us';
import ContactUs from './contact_us';
import Books from './books';
import Movies from './movies';
import Winners from './winners';
import Participants from './participants';
import Charts from './charts';





const Main = () => (
  <Switch>
     <Route path="/about_us" component={AboutUs} /> 
     <Route path="/movies" component={Movies} /> 
     <Route path="/participants" component={Participants} />
     <Route path="/books" component={Books} />  
     <Route path="/charts" component={Charts} />
  </Switch>
)

export default Main;
