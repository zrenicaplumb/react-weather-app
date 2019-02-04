import React from 'react';
import {Link} from 'react-router-dom';
import Nutrients from '../../components/RecipeApp/Nutrients';

export default class Recipe extends React.Component{
    state = {
        
    }
    render(){
        return(
        
            <div className="recipeItem">
                <img src={this.props.image} alt={this.props.alt}/>
                <div className="info-wrap">
                    <h4>{this.props.label}</h4>
                    <p>Calories: {Math.round(this.props.calories)}</p>
                    <p>Time to make: {this.props.totalTime}</p>
                    {console.log(this.props)}
                </div>
                <Link to={{
                    pathname: `/RecipeDetails/${this.props.label.replace(/-| |/g,'').toLowerCase()}`,
                    state: {
                        recipeName:this.props.label,
                        calories:this.props.calories,
                        image:this.props.image,
                        totalTime:this.props.totalTime,
                        alt:this.props.label,
                        // nutrition:this.props.nutrition
                        shareas:this.props.shareas

                    }
                }}>
                
                
                    <button >View Recipe</button>
                </Link>
            </div>
    
            
        )
    }
}