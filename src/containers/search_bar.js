import React, { Component } from 'react'; //import react and pullout the property of component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {         //Class Based component
    constructor(props){         //init the state
        super(props);           //calling a parent method

        this.state = { term:'' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) { //passed the event object for input
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) { 
        event.preventDefault();

        //we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
    
    render(){
        return(
            <form onSubmit = {this.onFormSubmit} className = "input-group">
                <input type="text" placeholder = "Get temperature by city..." className = "form-control"
                value = {this.state.term}
                onChange = {this.onInputChange} />
                <span className = "input-group-btn">
                    <button type = "submit" className = "btn btn-info">Search</button>
                    </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators ({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); //export search bar to components app.js

