import React from "react";
import "../css/Link.css";

function Link(props) {

    return (
        <a className="link" href={props.href}> {props.name}</a >
    );
}

export default Link;