import React, { useState, useRef } from "react";

function Toggle() {
    const [onOFToggle, setOnOFToggle] = useState(false);
    const buttonRef = useRef(null);

    const handleOnOFToggle = () => {
        const newOnOFToggle = !onOFToggle;
        setOnOFToggle(newOnOFToggle);
        // onToggleClick(newOnOFToggle, buttonRef.current.innerText);
    };

    const color = onOFToggle?"red":"white"
    return (
        <button style={{backgroundColor: color}} ref={buttonRef} onClick={handleOnOFToggle}>
            {onOFToggle ? "ON" : "OFF"}
        </button>
    );
}

export default Toggle;
