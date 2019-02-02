import React from 'react';
import {Link} from 'react-router-dom';

export default class Recipe extends React.Component{
    render(){
        return(
        
            <div className="recipeItem">
                <img src={this.props.image} alt={this.props.alt}/>
                <div className="info-wrap">
                    <h4>{this.props.label}</h4>
                    <p>Calories: {Math.round(this.props.calories)}</p>
                    <p>Time to make: {this.props.totalTime}</p>
                </div>
                <Link to="/">
                
                
                    <button onClick={this.props.recipeDetails}>View Recipe</button>
                </Link>
            </div>
    
            
        )
    }
}