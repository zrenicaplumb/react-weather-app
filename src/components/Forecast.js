import React from 'react';

export default class Forecast extends React.Component{
      //save date as variable
      // check each item, if date is different, render a new card for that day
      // be able to click on the card ,takes you to details component which shows hourly report

      // this.K2F = this.k2F.bind(this);

      // K2F(num){
      //       let parsedNum = parseFloat(num);
      //       return (parsedNum-273.15)*(1.8)+32;
      // }
      
      render(){
      //       const weatherArray = [];
            
      //      this.props.forecastDataArray.forEach(function(item){
      //            item.weather.forEach(function(item){
      //                   weatherArray.push(item);
                        
      //            })
                 
      //      })
      //      console.log(weatherArray);
            let prevDate = '';
            return(
                  <div className="forecast">
                       {
                             this.props.forecastDataArray.map(function(item){
                                    let date = item.dt_txt.slice(9,10);
                                    let weather = item.weather[0];
                                    console.log(prevDate);
                                    if(date != prevDate){
                                          prevDate = date;
                                          return(
                                                <div className="fieldGroup" >
                                                      <p>{Math.round((item.main.temp - 273.15) * (1.8) + 32) + ' F'}</p>
                                                      <p>{weather.main}</p>
                                                      <p>{item.dt_txt.slice(0,10)}</p>
                                                </div>
                                                

                                          )
                                        
                                    }

                             })
                       }
                        
                        
                  </div>
            )
      }
}