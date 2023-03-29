import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export const Mycard = (ref) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={ref.thumbnailUrl}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {ref.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={ref.url}>Learn More</Button>
            </CardActions>
        </Card>
    )
}
