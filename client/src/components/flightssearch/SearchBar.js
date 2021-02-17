import React, {useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import '../stranice/css/global.css';

const DatePicker = require("reactstrap-date-picker");
const SearchBar = (props) => {
    const [fromLocations, setFromLocations] = useState([]);
    const [toLocations, setToLocations] = useState([]);
    const [fromWhispererHidden, setFromWhispererHidden] = useState(false);
    const [toWhispererHidden, setToWhispererHidden] = useState(false);

    const fetchFromLocations = async (searchString = '') => {
        const urlFrom = `https://api.skypicker.com/locations?term=${searchString}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
        
        // fetching from locations
        const responseFrom = await fetch(urlFrom);
        const locationsFrom = await responseFrom.json();
        responseFrom && locationsFrom && setFromLocations(locationsFrom);
        
   
    }

    const fetchToLocations = async (searchString = '') => {
        const urlTo = `https://api.skypicker.com/locations?term=${searchString}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
        
        // fetching to locations
        const responseTo = await fetch(urlTo);
        const locationsTo = await responseTo.json();
        responseTo && locationsTo && setToLocations(locationsTo);
    }

    const handleFromInputChange = (e) => {
        setFromWhispererHidden(false);
        if (e.target.value.length >= 3) {
            fetchFromLocations(e.target.value);
        }

    } 

    const handleToInputChange = (e) => {
        setToWhispererHidden(false);
        if (e.target.value.length >= 3) {
            fetchToLocations(e.target.value);
        } 
    } 
    
    const handleItemFromClick = (e) => {
        props.handleFromChange(e);
        setFromWhispererHidden(!fromWhispererHidden);
    }
    
    const handleToItemClick = (e) => {
        props.handleToChange(e);
        setToWhispererHidden(!toWhispererHidden);
    }


    return (
        <div className="component-home-top" >
            <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: "url(/images/avion.png)",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
            <h1 className="lead text-light text-center mb-3">Find your flight in seconds.</h1>
        <div className="search-bar" >
        <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <div className="form-group origin">
                     <div className="input">
					  <label className="text-light" htmlFor="origin-airport">Origin:</label>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>From</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="from where you go" onChange={handleFromInputChange} />
            </InputGroup>
            <ul hidden={fromWhispererHidden} className="lista">
            {
                fromLocations.locations && fromLocations.locations.map((location, index) => (
                            <div key={index} className="whisperer__link" onClick={handleItemFromClick} id={location.code}>{location.name}</div>
                        ))
            }
            </ul>
        </div>
                    </div>
                  </div>
                  
                <div className="col-sm">
                    <div className="form-group destination">
                        <div className="input">
					        <label className="text-light" htmlFor="destination-airport">Destination:</label>
                                <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>To</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="where you wanna go" onChange={handleToInputChange} />
                        </InputGroup>
                        <ul hidden={toWhispererHidden} className="lista">
                         {
                           toLocations.locations && toLocations.locations.map((location, index) => (
                         <div key={index} className="whisperer__link" onClick={handleToItemClick} id={location.code}>{location.name}</div>
                         ))
                         }</ul>
                    </div>
             </div>
                  </div>
                </div>
                
                
                <div className="row">
                  <div className="col-sm col-12-md">
                    <div className="form-group departing-date">
                       <FormGroup>
                <Label>Departing:</Label>
                <DatePicker id = "date-from" value = {props.dateFromValue} onChange= {(v,f) => props.handleFromDateChange(v, f)} />
            </FormGroup>
                    </div>
                  </div>
                  
                  <div className="col-sm col-0-md">
                    <div className={`form-group returning-date`}>
					<FormGroup>
                <Label>Returning:</Label>
                <DatePicker id = "date-to" value = {props.dateToValue} onChange= {(v,f) => props.handleToDateChange(v, f)} />
            </FormGroup>
                      </div>
                  </div>
                </div>
                <div className="form-group submit">
                <button onClick={props.handleSubmit} type="submit" className="btn btn-primary btn-block mt-3">Find Flights!</button>
                </div>
              </div></div></div></div>

                
    )

}

export default SearchBar;