import { useState } from "react";

function Input ({ className, name, placeholder, value, handleInput }) {

    return (
        <label className={`w-full h-auto flex flex-col ${className}`}>
                <h5>{name}</h5>
                <input
                    className="w-full border-b-2px border-letter60"
                    id={name}
                    type="text" 
                    placeholder={placeholder}
                    value={value}
                    onChange={handleInput}/>
        </label>
    )
}

export default Input