import React from "react";

const Toggle = ({ theme, toggleTheme, classes }) => {
    return (
        <button className={classes} type="button" onClick={toggleTheme}>
            Switch Theme
        </button>
    );
};

export default Toggle;
