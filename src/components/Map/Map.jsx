import React from 'react'
import useStyles from './styles'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { LocationOnOutlined } from '@material-ui/icons'
import Rating from '@material-ui/lab'



const Map = ({coordinates, setCoordinates, setBounds, bounds}) => {


  const classes=useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
 

  return (
    <div className={classes.mapContainer}>
<GoogleMapReact
bootstrapURLKeys={{ key: 'AIzaSyDGlC9syn_HkewakWNQbCkJ5VsxFslapaI'}}
defaultCenter={coordinates}
center={coordinates}
defaultZoom={14}
margin={[50,50,50,50]}
options={''}
//google map will tell that the bounds has changes
onChange={(e) => {
  setCoordinates({lat: e.center.lat, lng: e.center.lng})
  setBounds({ ne: e.marginBounds.ne,sw: e.marginBounds.sw})
  
}}

>

</GoogleMapReact>
    </div>
  )
}

export default Map