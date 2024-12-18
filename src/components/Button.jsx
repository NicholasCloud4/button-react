import React from "react"

export default function Button(props) {

    function handleClick() {
        console.log("Logging in...")
    }

    return (
        <button {...props}>{props.children}</button>
    )
}