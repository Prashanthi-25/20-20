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
     {/* <Route path="/about_us" component={AboutUs} />  */}
     <Route path="/movies" component={Movies} /> 
      <Route path="/participants" component={Participants} /> 
     <Route path="/books" component={Books} />  
     <Route path="/winners" component={Winners} /> 
     <Route path="/charts" component={Charts} />
     <Route path="/june" component={() => {  
     window.location.href = 'https://ceg-acxions.github.io/2020challenge/stats/june.html';  
      return null; 
 }}/> 
 <Route path="/july" component={() => {  
     window.location.href = 'https://ceg-acxions.github.io/2020challenge/stats/july.html';  
      return null; 
 }}/> 
  </Switch>
)

export default Main;
