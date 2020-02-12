import '../styles.sass';
import '../styles.scss';

import React from 'react';
import axios from 'axios';

class Index extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            location: '',
            country: '',
            lat: null,
            long: null,
            date: '',
            temp: 0,
            weather: '',
            image: null,
            hourForecast: [{
                time: 0,
                temp: 0,
                weather: '',
                image: null,
            }],
            weekForecast: [{
                date: '',
                avgTemp: 0
            }]
        }

        this.getLocationWeather = this.getLocationWeather.bind(this)
    }

    componentDidMount(){
        this.getLocationWeather();
    }

    async getLocationWeather(){
        await navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                this.setState({
                    lat: lat,
                    long: long
                })
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bb8842d60516f2656d00cdbc9f999293`)
                    .then(res => {
                        const result = res.data;
                        console.log(result)

                        //in kelvin
                        // this.getTemp(result.main.temp)
                        this.setState({
                            location: result.name,
                            country: result.sys.country,
                            weather: result.weather[0].main
                        })
                    })

                this.getWeekForecast(lat,long);
                this.getHourForecast(lat,long)
            }
        )
        console.log(this.state)
    }

    getWeekForecast(lat, long){
        axios.get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=453ff5c4911348cd95e91044201102&q=${lat},${long}&format=json&num_of_days=7`)
            .then(res => {
                const result = res.data.data
                console.log(result)
                this.setState({
                    temp: result.current_condition[0].temp_C,
                    image: result.current_condition[0].weatherIconUrl[0].value
                })
                result.weather.map(data => {
                    this.setState({
                    weekForecast: [...this.state.weekForecast, {
                        date: data.date,
                        avgTemp:data.avgtempC
                    }]
                })})
            })
    }

    getHourForecast(lat, long){
        axios.get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=453ff5c4911348cd95e91044201102&q=${lat},${long}&format=json&num_of_days=7`)
        .then(res => {
            const result = res.data.data
            result.weather[0].hourly.map(data => {
                console.log(data.weatherDesc[0].value)
                this.setState({
                hourForecast: [...this.state.hourForecast, {
                    time: data.time,
                    temp:data.tempC,
                    weather: data.weatherDesc[0].value,
                    image: data.weatherIconUrl[0].value
                }]
            })})
            console.log(this.state)
        })
    }

    // getDate(){
    //     let date = new Date();
    //     console.log(date.getDate() + "/"+ parseInt(date.getMonth()+1) +"/"+ date.getFullYear());
    // }

    render(){
        return(
            <div>
                <div className="columns is-mobile">
                    <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="card">
                        <div className="card-content">
                            <p className="title">
                            Weather Forecast
                            </p>
                            <h1 className="title is-1">
                            {this.state.location}, {this.state.country}
                            </h1>
                            <p className="subtitle">
                            ({this.state.lat}, {this.state.long})
                            </p>
                            <br/>
                            <p className="subtitle">
                                {this.state.temp}&#8451;
                                <br/>
                                {this.state.weather}
                                <br/><br/>
                                <img src={this.state.image} />
                            </p>    
                        </div>
                        <div className="card-hour">
                            <p className="subtitle">
                            Hourly Weather Forecast
                            </p>
                            <div className="table-container">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            {this.state.hourForecast.map(data => 
                                                <th>{data.time}</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {this.state.hourForecast.map(data => 
                                                <td>{data.weather}</td>
                                            )}
                                        </tr>
                                        <tr>
                                            {this.state.hourForecast.map(data => 
                                                <td><img src={data.image}/></td>
                                            )}
                                        </tr>
                                        <tr>
                                            {this.state.hourForecast.map(data => 
                                                <td>{data.temp}&#8451;</td>
                                            )}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-week">
                            <p className="subtitle">
                                Weekly Weather Forecast
                            </p>
                            <div className="table-container">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            {this.state.weekForecast.map(day => 
                                                <th>{day.date}</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {this.state.weekForecast.map(day => 
                                                <td>{day.avgTemp}&#8451;</td>
                                            )}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Index;