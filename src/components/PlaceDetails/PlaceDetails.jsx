import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardAction, Chip} from '@material-ui/core'
import { LocationOn,Phone } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';

import useStyles from './styles'
const PlaceDetails = ({ place }) => {

  const classes = useStyles()

  return (
   <Card elevation={6}>
<CardMedia style={{ height: 350 }} 
image={place.photo ? place.photo.images.large.url : null}
title={place.name}
/>
<CardContent>
  <Typography gutterBottom variant='h5'>{place.name}</Typography>
</CardContent>

   </Card>
  )
}

export default PlaceDetails