import React from 'react'
import useStyles from './styles'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { LocationOnOutlined } from '@material-ui/icons'
import Rating from '@material-ui/lab/Rating';
import mapStyles from './mapStyles'


const Map = ({coordinates, setCoordinates, setBounds,places,setChildClicked, weatherData}) => {
  const classes=useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')
 
console.log(weatherData?.data?.length)

  return (
    <div className={classes.mapContainer}>
 
 
<GoogleMapReact
bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
defaultCenter={coordinates}
center={coordinates}
defaultZoom={14}
margin={[50,50,50,50]}
options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
//google map will tell that the bounds has changes
onChange={(e) => {
  setCoordinates({lat: e.center.lat, lng: e.center.lng})
  setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
  
}}
//click on markers 
onChildClick={(child) => setChildClicked(child)}
>
{places?.map((place,i) => (
  <div
  className={classes.markerContainer}
  lat={Number(place.latitude)}
  lng={Number(place.longitude)}
  key={i}
  >
{ !isDesktop ? (
  <LocationOnOutlined color='primary' fontSize="large" />
):(
<Paper elevation={3} className={classes.paper}>
<Typography gutterBottom variant='subtitle2' className={classes.typography}>
{place.name}
</Typography>
<img 
  className={classes.pointer}
  src={place.photo? place.photo.images.large.url : null}
  alt={place.name}
/>
<Rating size="small" value={Number(place.rating)} readOnly/>

</Paper>
)

}
  </div>
))}

{/* not shown on map */}
{weatherData?.data?.length && weatherData.data.map((data,i)=> (
<div key={i} lat={data.lat} lng={data.lon}>


<img src= {`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt="weather" height={100}/>

 </div>
))}

</GoogleMapReact>
    </div>
  )
}

export default Map