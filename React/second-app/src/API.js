import { useSelect } from '@mui/base';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Mycard } from './Mycard';

export const API = () => {

    const [data, setData] = useState([]);
    // let [ref , setRef] = useState(0);

    // 'https://jsonplaceholder.typicode.com/photos'

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
            console.log(data);
            setData(data);
        })
        // console.log("Ref value change");
    }, []);

    // const changehandler = () =>{
    //     ref++;
    //     setRef(ref);
    // }




    return (
        <>
        <div>API</div>
        {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={changehandler}> refresh</button> */}



        <div className='flex flex-wrap justify-center items-center'>
        {
            data.map((ref , index)=>{
                return (
                    <div className='m-2' key = {index}>
                        <Mycard  title={ref.title} thumbnailUrl = {ref.thumbnailUrl} url = {ref.url} />
                  </div>
                )
            })
        }
        </div>


        </>

    )
}
