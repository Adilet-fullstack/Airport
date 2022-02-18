import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Airport from "./components/airport/airport";
import NotFound from "./components/notFound/notFound";
import Flight from "./components/flight/Flight";
import FlightRoute from "./components/route flight/FlightRoute";
import Footer from "./components/footer/footer";



function App() {
  return (
    <div className="container" >
        <BrowserRouter>
     <Header/>

     <main className={'container'}>
             <Switch>
                 <Route exact path ='/' component={()=><Home/>}/>
                 <Route exact path ='/airport/' component={()=><Airport/>}/>
                 <Route exact path ='/airline' component={()=><Flight/>}/>
                 <Route exact path ='/flight/route' component={()=><FlightRoute/>}/>
                 <Route component={()=><NotFound/>}/>
             </Switch>

     </main>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
