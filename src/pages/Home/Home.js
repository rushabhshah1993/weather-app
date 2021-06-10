import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
    fetchCityWeather
} from './../../store/actions/weatherActions';

const Home = props => {
    useEffect(() => {
        props.fetchCityWeather('Mumbai');
    }, []);

    return (
        <div>
            Home
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCityWeather: city =>  dispatch(fetchCityWeather(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
