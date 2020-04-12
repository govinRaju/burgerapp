import React from 'react'
// import classes from './Button.css';
import './Button.css';


const button = (props) => (
    <button
        // className={[classes.Button, classes[props.children]]} onClick={props.clicked} >{props.children} </button>
        className="Button" onClick={props.clicked} >{props.children} </button>
);

export default button;