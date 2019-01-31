import React from 'react';

export default class ForecastHourly extends React.Component{
      //save date as varaible
      // check each item, if date is different, render a new card for that day
      // be able to click on the card ,takes you to details component which shows hourly report
      render(){
            return(
                  <div className="forecastHourly">
                        <div className="fieldGroup" >
                              {this.props.hourlyWeather}
                        </div>
                        
                        
                  </div>
            )
      }
}