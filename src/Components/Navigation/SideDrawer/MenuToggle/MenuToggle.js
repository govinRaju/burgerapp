import React from 'react'
import './MenuToggle.css';
const menuToggle = (props) => (
    <div className="MenuToggle" onClick={props.clicked} >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default menuToggle;