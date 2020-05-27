import React from 'react';
import './Input.css';
// import classNames from 'classnames';

const input = (props) => {
    let inputElement = null;

    // using the if else because the usage of the classNames array is not allowing the 
    //       functionality ---Have to work on it later
    if (props.invalid && props.shouldValidate && props.touched) {
        switch (props.elementType) {
            case ('input'):
                inputElement = <input className="Invalid" {...props.elementConfig} value={props.value} onChange={props.changed} />;
                break;
            case ('textarea'):
                inputElement = <textarea className="Invalid" {...props.elementConfig} value={props.value} onChange={props.changed} />;
                break;
            case ('select'):
                inputElement = <select
                    className="Invalid"
                    value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}            </select>;
                break;
            default:
                inputElement = <input className="Invalid" {...props.elementConfig} value={props.value} onChange={props.changed} />
        }
    }
    else {
        switch (props.elementType) {
            case ('input'):
                inputElement = <input className="InputElement" {...props.elementConfig} value={props.value} onChange={props.changed} />;
                break;
            case ('textarea'):
                inputElement = <textarea className="InputElement" {...props.elementConfig} value={props.value} onChange={props.changed} />;
                break;
            case ('select'):
                inputElement = <select
                    className="InputElement"
                    value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}            </select>;
                break;
            default:
                inputElement = <input className="InputElement" {...props.elementConfig} value={props.value} onChange={props.changed} />
        }
    }
    return (
        <div className="Input">
            <label className='Label' >{props.label}</label>
            {inputElement}
        </div>)
};

export default input;

