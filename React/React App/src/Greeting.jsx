import React from 'react'

export default function Greeting(props) {
    return (
        <div>
            <h3>Hello, {props.fn}! , Your Age is {props.age}</h3>
            <h3>The Favorite Color is {props.color}</h3>
        </div>
    )
}