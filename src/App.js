import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import { getPlacesData } from './api'
import List from './components/List/List'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'




const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  //get user's current location. this is only going to happen at the start
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])
//get data from travel adviser API
  useEffect(() => {
    console.log(bounds)
    getPlacesData(bounds.sw,bounds.ne)
      .then((data) => {
        console.log(data);
        setPlaces(data)
      ; 
      })
  }, [coordinates, bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }} >
        <Grid item xs={12} md={4}>
          <List  places={places}/>
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>


    </>
  )
}

export default App