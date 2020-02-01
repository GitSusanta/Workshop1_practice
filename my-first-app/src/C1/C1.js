import React from 'react';
import './C1.css';

function C1() {
    return (
        <div>
            <div>
                Susanta Ghosh
            </div>
            <C2 country="USA" state=" CT" />
        </div>        
    );
}

function C2(props) {
    return (
        <div className="C1">
            {props.country}{props.state}
            <p>{props.children}</p>
            <p onClick={props.click}>{props.name} {props.age}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>        
    );
}

export {
    C1,
    C2
  };