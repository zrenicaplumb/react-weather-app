import React from 'react';

export default class Forecast extends React.Component{
      render(){
            return(
                  <div className="forecast">
                        {this.props.weather &&  <label>weather:  <span>{this.props.weather}</span></label>}
                       

                  </div>
            )
      }
}