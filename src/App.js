import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import { getPlacesData } from './api'
import List from './components/List/List'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'




const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilterPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  //marker clicked on map, and then the new childclicked passed to List
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(" ")



  //get user's current location. this is only going to happen at the start
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(({
      coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  //get data according to the rating
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilterPlaces(filteredPlaces)
  }, [rating])

  //get data from travel adviser API
  useEffect(() => {
    setIsLoading(true)
    getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        // console.log(data);
        setPlaces(data)
        setFilterPlaces([])
        setRating(" ")
        setIsLoading(false)
          ;
      })
  }, [type, coordinates, bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }} >
        <Grid item xs={12} md={4}>
          <List places={filteredPlaces.length ? filteredPlaces : places} childClicked={childClicked} isLoading={isLoading}
            type={type} setType={setType} 
            rating={rating} setRating={setRating}
          />

        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>


    </>
  )
}

export default App