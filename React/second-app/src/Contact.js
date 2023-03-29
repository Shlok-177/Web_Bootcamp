import React from 'react'
import { useParams } from 'react-router-dom'

export const Contact = () => {
  const { num }  = useParams();
  return (
    <>    <div className='h-[100vh]'>This is contact Page</div>
    {console.log(num)}


    </>

  )
}
