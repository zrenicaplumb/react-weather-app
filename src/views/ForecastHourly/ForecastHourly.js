import React from 'react';

export default class ForecastHourly extends React.Component{
      //save date as varaible
      // check each item, if date is different, render a new card for that day
      // be able to click on the card ,takes you to details component which shows hourly report
      render(){
            return(
                  <div className="forecastHourly">
                        {this.props.forecastDataArray &&  this.props.forecastDataArray.map(function(item){
                              return(
                                    <div className="hourlyWeatherCard">
                                          <div className="fieldGroup">
                                                <label>Date: </label>
                                                <span>{item.dt_txt}</span>
                                          </div>
                                          <div className="fieldGroup">
                                                <label>Temp: </label>
                                                <span>{(item.main.temp - 273.15) * (1.8) + 32}</span>
                                          </div>
                                          <div className="fieldGroup">
                                                <label>Weather:</label>
                                                <span>{item.weather[0].description}</span>
                                          </div>

                                     

                                    </div>
                              )
                              
                        })}
                        
                        
                  </div>
            )
      }
}