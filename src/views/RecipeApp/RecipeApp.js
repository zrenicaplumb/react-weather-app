import React from 'react';
import Search from '../../components/RecipeApp/Search';
import Title from '../../components/RecipeApp/Title';
import Recipe from '../../components/RecipeApp/Recipe';
// import { Link } from 'react-router';
import './styles.css';

const APP_ID = 'e05eeb65';
const APP_KEY = '35964658d64fd0af273596106567c147';

export default class App extends React.Component{
      
      constructor(props){
            super(props);
            this.state = {
                  recipeData:undefined,
                  searchItem:undefined,
                  recipes:[],
                  ingredients:[],
                  ingredientText:[],
            }
            this.getRecipeData = this.getRecipeData.bind(this);
      }

      async getRecipeData(e){
            e.preventDefault();
            const search = e.target.elements.recipe_search.value;
            const max_search_results = e.target.elements.max_search_results.value;
            let min_calories = e.target.elements.min_calories.value;
            let max_calories = e.target.elements.max_calories.value;
            if(!min_calories){
                  min_calories = 100;
            }
            if(!max_calories){
                  max_calories = 1000;
            }
            const api_call = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}
                                          &to=${max_search_results}&calories=${min_calories}-${max_calories}`);
            const data = await api_call.json();
            const searchItem = data.q;
            const recipes = [];
            const ingredientText = [];
            const ingredients = [];
            console.log(data);
            data.hits.forEach(function(item){
                  recipes.push(item.recipe);
            })
            recipes.forEach(function(recipe){
                  ingredients.push(recipe.ingredients);
            })
            ingredients.forEach(function(ingredient){
                  ingredientText.push(ingredient.text);
            })
            console.log(ingredients);
            this.setState({
                  recipeData:data,
                  searchItem:searchItem,
                  recipes:recipes,
                  ingredients:ingredients,
                  ingredientText:ingredientText,
            })
      }

      render(){
            //to render recipes autoatically on page load, call the function etc idk
            // this.getRecipeData();
            return(
                  <div className="recipeAppWrap">
                        <div className="container">
                              <div className="headerWrap">
                                    <Title/>
                                    <Search 
                                          getRecipeData={this.getRecipeData}
                                    />
                                    {this.state.searchItem && <h2 className="searchItem">{this.state.searchItem} Recipes</h2>}

                                    <div className="recipeListContainer">
                                    {this.state.recipes && this.state.recipes.map(function(recipe){
                                          return(
                                                <div className="recipe">
                                                      <Recipe
                                                            label={recipe.label}
                                                            image={recipe.image}
                                                            alt={recipe.label}
                                                            calories={recipe.calories}
                                                            totalTime={recipe.totalTime}
                                                            
                                                      />
                                                </div>    
                                          )
                                    })}
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }
}