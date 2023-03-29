import React from 'react'

export const StudentData = (props) => {
    return (
        <div >
            <p>Name:- {props.name}</p>
            <p>Age:- {props.age}</p>
            <p>Marks:- {props.marks}</p>
        </div>
    )
}
