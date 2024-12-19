import React from "react"

export default function Button({ children, size, className, variant, ...rest }) {

    /**
     * Challenge: 
     * 
     * Accept a `variant` prop and style the Button component
     * accordingly. The values can be `success`, `warning`, or `danger`. 
     * Check the Figma design for the specific colors to be used for each
     * variant.
     */


    return (
        <button className={`button-${size} ${variant}`} {...rest}>{children}</button>
    )
}