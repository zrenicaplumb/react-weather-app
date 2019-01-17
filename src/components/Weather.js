import React from 'react';

export default class Weather extends React.Component{
      render(){
            return(
                  <div className="weather">
                        {this.props.city && this.props.country && <label>Location: <span>{this.props.city}, {this.props.country}</span></label> }
                        {this.props.temperature &&  <label>Temperature:  <span>{this.props.temperature}</span></label> }
                        {this.props.humidity && <label>Humidity: <span>{this.props.humidity}</span></label> }
                        {this.props.description &&  <label>Description:  <span>{this.props.description}</span></label>}
                        {/* {this.props.forecastArray && <label>ForecastArray:  <span>{this.props.forecastArray}</span></label>} */}
                        {/* {console.log(this.props.forecastArray)} */}
                       

                  </div>
            )
      }
}