import React from 'react';
import {Link} from 'react-router-dom';
import Nutrients from '../../components/RecipeApp/Nutrients';

export default class Recipe extends React.Component{
    render(){
        return(
        
            <div className="recipeItem">
                <img src={this.props.image} alt={this.props.alt}/>
                <div className="info-wrap">
                    <h4>{this.props.label}</h4>
                    <p>Calories: {Math.round(this.props.calories)}</p>
                    {console.log(this.props)}
                </div>
                <Link to={{
                    pathname: `/RecipeDetails/${this.props.label.replace(/-| |/g,'').toLowerCase()}`,
                    state: {
                        label:this.props.label,
                        calories:this.props.calories,
                        image:this.props.image,
                        alt:this.props.label,
                        nutrition:this.props.nutrition,
                        shareas:this.props.shareas,
                        url:this.props.url,
                        yield:this.props.yield
                        
                    }
                }}>
                
                
                    <button >View Recipe</button>
                </Link>
            </div>
    
            
        )
    }
}