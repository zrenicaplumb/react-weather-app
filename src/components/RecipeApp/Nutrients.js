import React from 'react';

export default class Nutrients extends React.Component{
      render(){
            
            return(
                  <div className="nutrients">
                        <p>{this.props.label}</p>
                        <br></br>
                        <p>{this.props.total}mg</p>
                        <br></br>

                        <p><strong>{Math.round(this.props.daily)}</strong>%</p>  
                  </div>
                  
            )
      }
}