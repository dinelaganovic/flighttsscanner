import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import pocetna from './components/stranice/pocetna';
import Karteiletovi from './components/stranice/karteiletovi';
import hoteli from './components/stranice/hoteli';
import Popmesta from './components/stranice/popmesta';
import BackToTop from "react-back-to-top-button";
import 'react-toastify/dist/ReactToastify.css';
import Prijava from './components/prijava';
import Login from './components/profil/Login';
import Notes from './components/profil/Notes';
import Home from './components/profil/Home';
import  Nav  from './components/profil/Nav';
import CreateNote from './components/profil/createNote';
import EditNote from './components/profil/editNote';



function App() {
    return ( <>
        <BackToTop showOnScrollUp showAt = { 100 }
        speed = { 1500 }
        easing = "easeInOutQuint" >
        <span > < i className = "fas fa-arrow-circle-up" > </i></span >
        </BackToTop>  
        <Router >
        <Navbar />
        <Switch >
        <Route path = '/'
        exact component = { pocetna }
        />         
        <Route path = "/karteiletovi"
        component = { Karteiletovi }
        />          
        <Route path = '/hoteli'
        exact component = { hoteli }
        />         
        <Route path = '/Popmesta'
        exact component = { Popmesta }
        />        
        <Route path = "/prijava"
        component = {Prijava}
        /> 
        <Route path = "/Login"
        component = {Login}/>
        <Route path = "/Notes"
        component = {Notes}/>
         <Route path = "/Home"
        component = {Home}/>
         <Route path = "/Nav"
        component = {Nav}/>
         <Route path = "/createNote"
        component = {CreateNote}/>
         <Route path = "/editNote"
        component = {EditNote}/>
        </Switch > </Router ></>
    );
}

export default App;