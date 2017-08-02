import React, { Component } from 'react';   //import react and pullout the property of component
import SearchBar from '../containers/search_bar'; //import search bar from search_bar container
import WeatherList from '../containers/weather_list'; //import weatherList from Weather_list container


export default class App extends Component {   //Class Based component
  render() {    //when we define class base component it will need to define a render method & JSX
    return (    //this is jsx
      <div>
        <h2><center>Dark Sky Weather</center></h2>
        <SearchBar />    
        <WeatherList />
      </div>
    );
  }
}
