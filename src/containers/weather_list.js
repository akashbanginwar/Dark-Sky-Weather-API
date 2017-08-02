import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData){

        var weekday = new Array(7);
                weekday[1] = "Mon";
                weekday[2] = "Tue";
                weekday[3] = "Wed";
                weekday[4] = "Thus";
                weekday[5] = "Fri";
                weekday[6] = "Sat";
                weekday[7] =  "Sun";

        

        const {data, city} = cityData;
        const currentIcon = getIconFromCSS(data.currently.icon);
        const upcomingIcon = getIconFromCSS(data.hourly.data[1].icon);
        const nxtDayIcon = getIconFromCSS(data.daily.data[1].icon);
        const name = city;
        const currentTemp = data.currently.temperature;
        const summaryCurr = data.currently.icon;
        const nxtHrWeather = data.hourly.data[1].temperature;
        const summaryNxtHr = data.hourly.data[1].icon;
        const nxtDayWeather = data.daily.data[1].temperatureMax;
        const summaryNxtDay = data.daily.data[1].icon;
        const sevenDays = Math.round(data.daily.data.reduce((p, c, i) => {return  i > 0 ? c.temperatureMax/7 + p: p},0)).toFixed(2);
        const fiveDays = data.daily.data.map(data => data.temperatureMax);
        const oneDay = getIconFromCSS(data.daily.data[1].icon);
        const twoDay = getIconFromCSS(data.daily.data[2].icon);
        const threeDay = getIconFromCSS(data.daily.data[3].icon);
        const fourDay = getIconFromCSS(data.daily.data[4].icon);
        const fiveDay = getIconFromCSS(data.daily.data[5].icon);
        

        const epochDate = data.daily.data[1].apparentTemperatureMaxTime;
        const d = new Date(0);
            d.setUTCSeconds(epochDate);
 
        return (
            <tr key = { name }>
                <td>{ name }</td>
                <td><span className= { currentIcon }></span> { currentTemp } {summaryCurr}</td>
                <td><span className= { upcomingIcon }></span> { nxtHrWeather } {summaryNxtHr}</td>
                <td> <span className= { nxtDayIcon }></span> { nxtDayWeather } { summaryNxtDay }</td>
                <td>{ sevenDays }</td>
                <td>
                    <table>
                        <tr>
                            <th>{ weekday[d.getDay()] }</th>
                            <th>{ weekday[d.getDay()+1] }</th>
                            <th>{ weekday[d.getDay()+2] }</th>
                            <th>{ weekday[d.getDay()+3] }</th>
                            <th>{ weekday[d.getDay()+4] }</th>
                        </tr>
                        <tr>
                            <td><span className= { oneDay }></span> { fiveDays[1] }</td>
                            <td> <span className= { twoDay }></span> { fiveDays[2] }</td>
                            <td> <span className= { threeDay }></span> { fiveDays[3] }</td>
                            <td> <span className= { fourDay }></span> { fiveDays[4] }</td>
                            <td> <span className= { fiveDay }></span> { fiveDays[5] }</td>
                            </tr>
                    </table>
                </td>
             </tr>
             
        );
               
    }

    render() {
console.log(this.props);
const {weather} = this.props;
        if(!this.props || !weather || weather.length < 1) return <div></div>;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Current Weather</th>
                        <th>Upcoming Weather (Next Hour)</th>
                        <th>Tomorrow’s Weather</th>
                        <th>Next 7 Days Weather Agg</th>
                        <th>Next 5 Days Weather</th>
                    </tr>
                    
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>                
            </table>
        );
    }
}

function getIconFromCSS(iconData){
    var retVal = null;
switch (iconData) {
    case 'clear-day':
        retVal = 'fa fa-sun-o';
        break;

        case 'clear-night':
        retVal = 'fa fa-moon-o';
        break;

        case 'rain':
        retVal = 'fa fa-umbrella';
        break;

        case 'snow':
        retVal = 'fa fa-snowflake-o';
        break;

        case 'sleet':
        retVal = 'fa fa-empire';
        break;

        case 'wind':
        retVal = 'fa fa-pagelines';
        break;

        case 'fog':
        retVal = 'fa fa-blind';
        break;

        case 'cloudy':
        retVal = 'fa fa-cloud';
        break;

        case 'partly-cloudy-day':
        retVal = 'fa fa-skyatlas';
        break;

        case 'partly-cloudy-night':
        retVal = 'fa fa-soundcloud';
        break;
        
    
}
return retVal;
}


function mapStateToProps({ weather }){
    
    return { weather }; //{weather} === {weather:weather}
}


export default connect(mapStateToProps)(WeatherList); //export weatherList to components app.js