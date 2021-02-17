import React, { lazy } from 'react';
import SearchBar from '../flightssearch/SearchBar';
import SearchResults from '../flightssearch/SearchResults';
import { useState, useEffect } from 'react';
import './css/global.css';
import HomeAbout from '../flightssearch/home-about';
import Footer from './../Footer';
import './css/home.css'

const Karteiletovi = () => {
    const [flights, setFlights] = useState([]);
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [dateFromFormatted, setDateFromFormatted] = useState();
    const [dateFromValue, setDateFromValue] = useState();
    const [dateToFormatted, setDateToFormatted] = useState();
    const [dateToValue, setDateToValue] = useState();
    const [searchChange, setSearchChange] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const handleToChange = (e) => {
      setTo(e.currentTarget.id);    
    }  
  
    const handleFromChange = (e) => {
      setFrom(e.currentTarget.id);
    }
  
    const handleFromDateChange = (value, formattedValue) => {
        setDateFromFormatted(formattedValue);
        setDateFromValue(value);
    }
  
    const handleToDateChange = (value, formattedValue) => {
      setDateToFormatted(formattedValue);
      setDateToValue(value);
    }
  
    const handleSubmit = () => {
      setSearchChange(!searchChange);
    }
  
    useEffect(() => {
      fetchData();
    }, [searchChange]);
  
    const fetchData = async () => {
      setLoading(true);
      const url = `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=${dateFromFormatted}&dateTo=${dateToFormatted}&partner=picky&v=3`;
      const response = await fetch(url);
  
      const resp = await response.json();
      setFlights(resp);
      setLoading(false);
    }
  
  
    return (
      <div className="flights">
        <SearchBar handleToChange={handleToChange}
                   handleFromChange={handleFromChange} 
                   handleFromDateChange={handleFromDateChange}
                   dateFromValue={dateFromValue}
                   handleToDateChange={handleToDateChange}
                   dateToValue={dateToValue}
                   handleSubmit={handleSubmit}/>      
  
        <SearchResults flights={flights}
                       loading={loading}/>
        < div className = "component-home" >
        <HomeAbout />
        <Footer />
        </div>
      </div>
  
    );
  }
  
  export default Karteiletovi;