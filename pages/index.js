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
            hourForecast: [],
            weekForecast: []
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
                            weather: result.weather[0].main,
                            date: this.getDate(result.dt)
                        })
                    })

                this.getWeekForecast(lat,long);
                this.getHourForecast(lat,long)
            }
        )
        console.log(this.state)
    }

    getWeekForecast(lat, long){
        axios.get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=453ff5c4911348cd95e91044201102&q=${lat},${long}&format=json&num_of_days=8`)
            .then(res => {
                const result = res.data.data
                console.log(result)
                this.setState({
                    temp: result.current_condition[0].temp_C,
                    image: result.current_condition[0].weatherIconUrl[0].value
                })
                result.weather.map(data => {
                    var day = new Date(data.date);
                    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    day = days[day.getDay()];
                    this.setState({
                    weekForecast: [...this.state.weekForecast, {
                        day: day,
                        date: data.date,
                        maxTemp:data.maxtempC,
                        hour: {
                            time: data.hourly
                        }
                    }]
                })})
            })
    }

    getHourForecast(lat, long){
        axios.get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=453ff5c4911348cd95e91044201102&q=${lat},${long}&format=json&num_of_days=7`)
        .then(res => {
            const result = res.data.data
            result.weather[0].hourly.map(data => {
                this.setState({
                hourForecast: [...this.state.hourForecast, {
                    time: data.time,
                    temp:data.tempC,
                    weather: data.weatherDesc[0].value,
                    image: data.weatherIconUrl[0].value
                }]
            })})
        })
    }

    getDate(dt){
        var tf = new Date(dt*1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var day = days[tf.getDay()];
        var date = tf.getDate();
        var month = months[tf.getMonth()];
        var year = tf.getFullYear();
        return `${day}, ${date} ${month} ${year}`;
    }

    render(){
        var hours = ['0000', '0300', '0600', '0900', '1200', '1500', '1800', '2100'];
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
                            <p className="title">
                            {this.state.date}
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
                                            {hours.map(hour => 
                                                <th>{hour}</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {this.state.hourForecast.map(data => 
                                                <td>
                                                    {data.temp}&#8451;<br/>
                                                    <img src={data.image}/>
                                                    {data.weather}
                                                </td>
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
                                            <th></th>
                                            {hours.map(hour => 
                                                <th>{hour}</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {this.state.weekForecast.map(day => 
                                            <tr>
                                                <td><b>{day.day}</b>&nbsp;&nbsp;{day.date}</td>
                                                {day.hour.time.map(data => 
                                                    <td>
                                                        {data.tempC}&#8451;
                                                        <img src={data.weatherIconUrl[0].value} alt="weather icon"/>
                                                        {/* {data.weatherDesc[0].value} */}
                                                    </td>
                                                )}
                                            </tr>
                                            )}
                                        
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