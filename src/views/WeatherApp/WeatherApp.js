import React from 'react';
import Titles from '../../components/WeatherApp/Titles';
import Form from '../../components/WeatherApp/Form';
import Weather from '../../components/WeatherApp/Weather';
import Forecast from '../../components/WeatherApp/Forecast';
import './styles.css';
import ForecastHourly from '../ForecastHourly/ForecastHourly';




const API_KEY = "016a6f0bc508419a9a9bbb66139efee0";



export default class App extends React.Component{
      constructor(props){
            super(props);
            this.state = {
                  temperature:undefined,
                  humidity:undefined,
                  city:undefined,
                  country:undefined,
                  description:undefined,
                  error:null,
                  forecastDataArray:[],
                  hourlyWeather:[]
            }
            this.getWeather = this.getWeather.bind(this);
            this.showHourlyWeather = this.showHourlyWeather.bind(this);

      }

      componentDidMount(){
            this.defaultSearch();
      }

      async defaultSearch(){    
            let app = this;
            const currWeatherApiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
            const currWeatherData = await currWeatherApiCall.json();
            const forecastApiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=${API_KEY}`);
            let forecastData = await forecastApiCall.json();
            //get the forecast data
            console.log(forecastData);
            //make the new array to replace the one in state
            const forecastDataArray = [];
            
            forecastData.list.forEach(function(item){

                  forecastDataArray.push(item);
                  
            })

            const hourlyWeather = [];

            

            
            this.setState({
                  temperature:currWeatherData.main.temp,
                  humidity:currWeatherData.main.humidity,
                  city:currWeatherData.name,
                  country:currWeatherData.sys.country,
                  description:currWeatherData.weather[0].description,
                  error:null,
                  forecastDataArray:forecastDataArray,

                  hourlyWeather:hourlyWeather
            })
      }

      async getWeather(e){    
            let app = this;
            e.preventDefault();
            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
            const currWeatherApiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
            const forecastApiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`);
            const currWeatherData = await currWeatherApiCall.json();
            let forecastData = await forecastApiCall.json();
            //get the forecast data
            console.log(forecastData);
            //make the new array to replace the one in state
            const forecastDataArray = [];
            
            forecastData.list.forEach(function(item){

                  forecastDataArray.push(item);
                  
            })

            const hourlyWeather = [];

            

            
            this.setState({
                  temperature:currWeatherData.main.temp,
                  humidity:currWeatherData.main.humidity,
                  city:currWeatherData.name,
                  country:currWeatherData.sys.country,
                  description:currWeatherData.weather[0].description,
                  error:null,
                  forecastDataArray:forecastDataArray,
                  hourlyWeather:hourlyWeather
            })
      }

      showHourlyWeather(e){

      }

      render(){
            console.log(this.state)
            return(
                  <div className="container">
                        <Titles/>
                        <Form 
                              getWeather={this.getWeather}
                        />
                        <h3><strong>Current Weather:</strong></h3>
                        <Weather 
                              humidity={this.state.humidity}
                              city={this.state.city}
                              country={this.state.country}
                              error={this.state.error}
                              description={this.state.description}
                              temperature={this.state.temperature}
                        />  
                        <h3 className="forecasth3"><strong>5 Day Forecast:</strong></h3>
                        <Forecast
                              forecastDataArray={this.state.forecastDataArray}
                        >
                              
                        </Forecast>
                        {/* <ForecastHourly 
                                    hourlyWeather={this.state.hourlyWeather}
                              /> */}

                        
                  </div>
                 
            )
      }
}

