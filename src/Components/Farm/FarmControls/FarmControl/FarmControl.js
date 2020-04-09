import React from 'react';
import '././FarmControl.css';

const farmControl = (props) => (
    <div className="FarmControl">
        <div className="Label">{props.label}</div>
        <button className="Less" onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className="More" onClick={props.added}>More</button>
    </div>
);
export default farmControl;