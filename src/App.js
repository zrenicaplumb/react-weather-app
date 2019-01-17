import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './bootstrap.min.css';
import './styles.css';

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
            }
            this.getWeather = this.getWeather.bind(this);
      }

      async getWeather(e){    
            e.preventDefault();
            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
            const data = await api_call.json();
            console.log(data);
            if(!data){
                  this.setState({
                        error:true
                  })
                 console.log('there is no data');
            }
            else{
                  this.setState({
                        temperature:data.main.temp,
                        humidity:data.main.humidity,
                        city:data.name,
                        country:data.sys.country,
                        description:data.weather[0].description,
                        error:null,
                  })
            }
      }

      render(){
            return(
                  <div className="container">
                        <Titles/>
                        <Form 
                              getWeather={this.getWeather}
                        />
                        <Weather 
                              humidity={this.state.humidity}
                              city={this.state.city}
                              country={this.state.country}
                              error={this.state.error}
                              description={this.state.description}
                              temperature={this.state.temperature}
                        />  
                  </div>
                 
            )
      }
}
