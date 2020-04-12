import React from 'react'
import off from '../../Assets/Images/fo.jpg';
import './Logo.css';
const logo = (props) => (
    <div className="Logo" style={{ height: props.height }}>
        <img src={off} alt="Farmer" />
    </div>
);

export default logo;