import React from 'react';
import Nutrients from '../../components/RecipeApp/Nutrients';

export default class RecipeDetails extends React.Component{
      render(){
            console.log(this.props);
            const state = this.props.location.state;
            return(
                  <div className="recipeDetails">
                        <img src={state.image} alt={state.alt}/>
                        <div className="recipeInfoWrap">
                              <h4>{state.label}</h4>
                              <p>Calories: {Math.round(state.calories)}</p>
                              <p>Calories per serving: {Math.round(state.calories/state.yield)}</p>

                              <p>Serves: {state.yield}</p>

                              <p>Source: <a href={state.url}>{state.url}</a></p>
                              <h3>Nutrition Facts</h3>
                              <div className="nutritionFacts">
                                    
                                    
                                    {state.nutrition.map(function(nutrient){
                                          
                                          return(
                                                <Nutrients
                                                      label={nutrient.label}
                                                      total={nutrient.total}
                                                      daily={nutrient.daily}
                                                />  
                                          )
                                    })}
                              </div>
                              
                              
                        </div>     

                  </div>
            )
      }
}