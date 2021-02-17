import React from 'react';
import { DateTime } from 'luxon';
import '../stranice/css/home.css'

const SearchResults = (props) => {
    if (props.loading) {
        return (
            <div style={{color: "white", fontSize:"50px", paddingTop:"40px", marginLeft:"48%", marginBottom:"40px"}}><i class="fal fa-sync-alt"></i></div>
        )
    }

    return (

        <div className="container_results">
            {props.flights.data && props.flights.data.map(flight => (
            <div className="flightTile">
                 <div className="flightTileMain">
                 <div className="flight1">
                 <h2 style={{color:"black"}}><i class="fas fa-house-flood"></i> {flight.cityFrom}</h2>
                 </div>

                 <div className="bothFlights" style={{marginTop:"100px"}}>
                 <p>Time of departure: {DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}</p>
                 <p>Time of arrival: {DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</p>
                 <p>Fly duration: {flight.fly_duration}</p>
                 </div>

                 <div className="flight2">
                 <h2 style={{color:"black"}}><i class="fas fa-city"></i> {flight.cityTo}</h2>
                 </div>
                </div>

                <div style={{textAlign:"center",padding:"10px",marginTop:"7px"}}>
                     <h2 style={{color:"black"}}><i class="fas fa-money-bill-alt"></i> {flight.price}<i class="fas fa-euro-sign"></i></h2>
                </div>

            </div>
            ))}
        </div>
    )

}

export default SearchResults;