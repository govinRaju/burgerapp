import React from 'react'
// import classes from './Button.css';
import './Button.css';
// import classNames from 'classnames';



const button = (props) => (

    <button
        // className={props.children ? Danger : Success} onClick={props.clicked} >{props.children} </button>
        className="Button" onClick={props.clicked} >{props.children} </button>
    // className={[classNames.Button, classNames[props.btnType]].join(' ')}
    // onClick={props.clicked}>{props.children}</button>
);

export default button;