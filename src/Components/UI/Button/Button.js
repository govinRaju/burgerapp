import React from 'react'
// import classes from './Button.css';
import './Button.css';
// import { Switch } from 'react-router-dom';
// import classNames from 'classnames';



const button = (props) => {
    let buttonElement = null;
    //using switch as the array of the classnames of the classnames are not present correctly
    switch (props.btnType) {
        case ('Success'):
            buttonElement = <button className="Success" onClick={props.clicked} disabled={props.disabled} >{props.children} </button>;
            break;
        case ('Danger'):
            buttonElement = <button className="Danger" onClick={props.clicked} disabled={props.disabled} >{props.children} </button>;
            break;
        default:
            buttonElement = <button className="Button" onClick={props.clicked} disabled={props.disabled} >{props.children} </button>;
            break;
    }


    return (
        <span>
            {buttonElement}
        </span>
    );
    // <button className="Button" onClick={props.clicked} >{props.children} </button>

    // className={props.children ? Danger : Success} onClick={props.clicked} >{props.children} </button>
    // className={[classNames.Button, classNames[props.btnType]].join(' ')}
    // onClick={props.clicked}>{props.children}</button>
};

export default button;