import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const API = () => {

    const [data, setData] = useState([]);
    const [randomData , setRandomData] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then((res) => res.json()).then((data) => {
            setData(data);
            console.log(data);
        })

        fetch('https://random-data-api.com/api/v2/banks').then((res) => res.json()).then((data) => setRandomData(data))
    }, []);


    return (
        <>
                <div className='flex flex-wrap justify-center items-center'>
            {
                data.map((res) => {
                    return (
                        <div className='m-2'>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={res.thumbnailUrl}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {res.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" href={res.url}>Click it</Button>
                                </CardActions>
                            </Card>
                            </div>
                    )
                })
            }
            </div>
        </>
    )
}
