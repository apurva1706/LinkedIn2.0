import React from 'react'
import "./inputOptions.css"

function InputOptions({title,Icon,color}) {
    return (
        <div className="inputOptions">
            <Icon style={{color:color}} className="inputOptions_icon"/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
