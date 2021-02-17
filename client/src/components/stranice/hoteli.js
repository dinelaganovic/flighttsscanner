import React from 'react';
import '../../App.css';
import { RecoilRoot } from "recoil";
import Map from "./../map/Map";
import "./css/hoteli.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import RecoilDebugger from "./../RecoilDebugger";


const hoteli = () => {
    return ( <div>
        <RecoilRoot >
        <RecoilDebugger />
        <Map />
        </RecoilRoot></div >
    );
};

export default hoteli;