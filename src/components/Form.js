import React from 'react';

export default class Form extends React.Component{
      render(){
            return(
                  <form onSubmit={this.props.getWeather}>
                        <input type="text" placeholder="City..." name="city" required/>
                        <input type="text" placeholder="Country..." name="country" required/>
                        <button className="submitBtn">Submit</button>
                  </form>
            )
      }
}