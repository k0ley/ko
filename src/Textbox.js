import React from 'react';
import "./bulma/bulma.sass";
import "./custom.css"

function TextBox(props){
    return (
    <div className="container has-text-centered">
        <div className="box">
            {props.text}
        </div>
    </div>
    );
}

export default TextBox;