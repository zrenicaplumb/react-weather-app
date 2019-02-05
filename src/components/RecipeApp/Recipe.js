import React from 'react';
import {Link} from 'react-router-dom';
import Nutrients from '../../components/RecipeApp/Nutrients';

export default class Recipe extends React.Component{
    render(){
        const {recipe} = this.props;
        return(
        
            <div className="recipeItem">
                <img src={recipe.image} alt={recipe.alt}/>
                <div className="info-wrap">
                    <h4>{recipe.label}</h4>
                    <p>Calories: {Math.round(recipe.calories)}</p>
                </div>
                <Link to={{
                    pathname: `/RecipeDetails/${recipe.label.replace(/-| |/g,'').toLowerCase()}`,
                    state: {
                        label:recipe.label,
                        calories:recipe.calories,
                        image:recipe.image,
                        alt:recipe.label,
                        nutrition:recipe.digest,
                        shareas:recipe.shareas,
                        url:recipe.url,
                        yield:recipe.yield
                        
                    }
                }}>
                
                
                    <button >View Recipe</button>
                </Link>
            </div>
    
            
        )
    }
}