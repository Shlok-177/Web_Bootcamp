import React , { useState } from 'react'

export const State = () => {

    // console.log(arr);
    const [name  , setName] = useState("shlok");
    console.log(useState());

    // let name  = "shlok";
    const changename = () =>{
        setName("Manav");
    }


  return (
    <>
    <div>{name}</div>

    <button onClick={changename}>change name</button>

    </>
  )
}
