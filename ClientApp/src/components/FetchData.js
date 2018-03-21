import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/WeatherForecasts';
import Button from 'material-ui/Button';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

class FetchData extends Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    }

    componentWillReceiveProps(nextProps) {
        // This method runs when incoming props (e.g., route params) change
        const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;
        this.props.requestWeatherForecasts(startDateIndex);
    }

    render() {
        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {renderForecastsTable(this.props)}
                {renderPagination(this.props, styles)}
            </div>
        );
    }
}

function renderForecastsTable(props) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {props.forecasts.map(forecast =>
                    <tr key={forecast.dateFormatted}>
                        <td>{forecast.dateFormatted}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

function renderPagination(props, classes) {
    const prevStartDateIndex = (props.startDateIndex || 0) - 5;
    const nextStartDateIndex = (props.startDateIndex || 0) + 5;

    return <p className='clearfix text-center'>
        
        <Button className={classes.button} variant="raised" color="default" component={Link} to={`/fetchdata/${prevStartDateIndex}`}>
            Previous
        </Button>
        <Button className={classes.button} variant="raised" color="default" component={Link} to={`/fetchdata/${nextStartDateIndex}`}>
            Next
        </Button>

        {props.isLoading ? <span>Loading...</span> : []}
    </p>;
}

const mapStateToProps = state => state.weatherForecasts;

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FetchData);
