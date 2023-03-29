import React from 'react'
import Button2 from './Button2'
import "./App.css";

export default function Button(props) {



  return (
    <>
    <h1>{props.title} Button</h1>
    <h2>This is h2 tag</h2>
    <button className = 'btn'>{props.value}</button>
    <Button2 value = {props.valuOfBtn2} className = "red" />
    {props.children}


    </>
  )
}


