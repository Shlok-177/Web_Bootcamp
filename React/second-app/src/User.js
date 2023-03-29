import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const User = (  ) => {


  // ?  useState -> Array [varible , function]
  // ?  useEffect -> [Callback_function , Array]
  // ?  useParams -> object
  // ?  useLocation -> object
  // ?  useNavigate -> function


  const { name , age } = useParams();
  const location  = useLocation();
  const Navigate = useNavigate();

  const clickhandler = () =>{
    Navigate('/');
  }

  return (
    <>
    <div className='h-[100vh]'>
    <div className=''>This is USer page</div>
    <h1 className='text-4axl'>Hello {name} and my age is {age}</h1>

    {(location.pathname === `/user/shlok`) ? <button className='border broder-black bg-blue-800 text-white rounded-md p-2' onClick={clickhandler}>Click me</button> : null }
    </div>


    </>
  )
}
