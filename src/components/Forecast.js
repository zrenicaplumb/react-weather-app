import React from 'react';
import {Link} from 'react-router-dom';
import ForecastHourly from '../views/ForecastHourly/ForecastHourly';

export default class Forecast extends React.Component{
     
      
      render(){
    
            let prevDate = '';
            return(
                  <div className="forecast">
                       {
                             this.props.forecastDataArray.map(function(item){
                                    let date = item.dt_txt.slice(9,10);
                                    let weather = item.weather[0];
                                    console.log(item);
                                    if(date != prevDate){
                                          prevDate = date;
                                          return(   
                                                <Link to="/ForecastHourly/:id">
                                                      <p>{Math.round((item.main.temp - 273.15) * (1.8) + 32) + ' F'}</p>
                                                      <p>{weather.main}</p>
                                                      <p>{item.dt_txt.slice(0,10)}</p>
                                                </Link>
                                          )
                                        
                                    }

                             })
                       }
                        
                        
                  </div>
            )
      }
}