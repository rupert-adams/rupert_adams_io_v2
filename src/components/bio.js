import React from 'react';
import { bioData } from '../data/bioData.js';
import ru_de from "../media/ru_de.png"


const Bio = () => (
    <div className="App-component">
        <div className="App-bio">
            <p className="App-bio-text">{bioData[0].bio}</p>
            <img src={ru_de} className="App-bio-image" />
        </div>
    </div>
);

export default Bio