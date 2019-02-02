import React from 'react';

export default class Recipe extends React.Component{
    render(){
        return(
            <div className="recipeItem">
                 
                <h4>{this.props.label}</h4>
                <img src={this.props.image} alt={this.props.alt}/>
                <p>Calories: {Math.round(this.props.calories)}</p>
                <p>Time to make: {this.props.totalTime / 60}</p>
    
            </div>
        )
    }
}