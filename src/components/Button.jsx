import React from "react"

export default function Button({ children, ...rest }) {

    console.log(rest)

    return (
        <button {...rest}>{children}</button>
    )
}