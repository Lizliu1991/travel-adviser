import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, Chip, CardActions} from '@material-ui/core'
import { LocationOn,Phone } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'
const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles()
if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start"})

  return (
   <Card elevation={6}>
<CardMedia style={{ height: 350 }} 
image={place.photo ? place.photo.images.large.url : null}
title={place.name}
/>
<CardContent>

  <Typography gutterBottom variant='h5'>{place.name}</Typography>
  <Box display="flex" justifyContent='space-between'>
  <Rating  value={Number(place.rating)} readOnly/>
<Typography gutterBottom variant='subtitle1'>Out of {place.num_reviews}</Typography>
  </Box>
  <Box display="flex" justifyContent='space-between'>
<Typography variant='subtitle1'>Price</Typography>
<Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
  </Box>
  <Box display="flex" justifyContent='space-between'>
<Typography variant='subtitle1'>Ranking</Typography>
<Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
  </Box>
  {place?.awards?.map((award,index) => (
    <Box key={index} my={1} display="flex" justifyContent='space-between' alignItems='center'>
<img src={award.images.small} alt={award.display_name}
/>
<Typography variant='subtitle2' color="textSecondary">{award.display_name}</Typography>
  </Box>
  ))}
  {/* foot that this restaurant serve . ? is very importtant, because map function has to make sure that it absolutly has something to map over*/}
  {place?.cuisine?.map(({ name }) => (
<Chip 
  key={name} size="small" label={name} className={classes.chip}
/>
  ))}
  {place?.address && (
    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
<LocationOn /> {place.address}
    </Typography>
  )}
  {place?.phone && (
    <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
<Phone /> {place.phone}
    </Typography>
  )}
</CardContent>
{/* if the user clicks , they will be redireced to the retaurant's website or trip adviser website */}

<CardActions>
<Button size="small" color="primary" onClick={() => window.open(place.web_url,'blank')}>
Trip Adviser
</Button>
<Button size="small" color="primary" onClick={() => window.open(place.website,'blank')}>
Website
</Button>
</CardActions>

   </Card>
  )
}

export default PlaceDetails