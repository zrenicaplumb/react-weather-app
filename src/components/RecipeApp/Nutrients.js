import React from 'react';

export default class Nutrients extends React.Component{
      render(){
            return(
                  <div className="nutrient">{this.props.label}</div>
            )
      }
}