import React from 'react';
import Nutrients from '../../components/RecipeApp/Nutrients';

export default class RecipeDetails extends React.Component{
      render(){
            console.log(this.props);
            return(
                  <div className="recipeDetails">
                        <img src={this.props.image} alt={this.props.alt}/>
                        <div className="info-wrap">
                              <h4>{this.props.label}</h4>
                              <p>Calories: {Math.round(this.props.calories)}</p>
                              <p>Time to make: {this.props.totalTime}</p>
                              {/* {console.log(this.props)} */}
                        </div>     

                  </div>
            )
      }
}