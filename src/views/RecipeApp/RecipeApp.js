import React from 'react';
import Search from '../../components/RecipeApp/Search';
import Title from '../../components/RecipeApp/Title';
import Recipe from '../../components/RecipeApp/Recipe';
import { Link } from 'react-router';
import './styles.css';

const APP_ID = 'e05eeb65';
const APP_KEY = '35964658d64fd0af273596106567c147';

export default class App extends React.Component{
      
      //example query = curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
      constructor(props){
            super(props);
            this.state = {
                  recipeData:undefined,
                  searchItem:undefined,
                  recipeArray:[],
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
            const recipeArray = [];
            console.log(data);
            data.hits.forEach(function(item){
                  recipeArray.push(item.recipe);

            })
            console.log(recipeArray);

            this.setState({
                  recipeData:data,
                  searchItem:searchItem,
                  recipeArray:recipeArray,
            })
      }

      render(){
            
            return(
                  
                  <div className="recipeAppWrap">
                        <div className="container">
                              <div className="headerWrap">
                                    <Title/>
                                    <Search 
                                          getRecipeData={this.getRecipeData}
                                    />
                                    <div className="recipeListContainer">
                                    
                                    
                                    {this.state.recipeArray && this.state.recipeArray.map(function(recipe){
                                          console.log(recipe);
                                          
                                          return(
                                                <div className="recipe">
                                                <Link >
                                                      <Recipe
                                                            label={recipe.label}
                                                            image={recipe.image}
                                                            alt={recipe.label}
                                                            calories={recipe.calories}
                                                            totalTime={recipe.totalTime}
                                                      />
                                                </Link>
                                                      
                                                </div>    
                                          )
                                    })}
                                    </div>
                              </div>

                              {this.state.searchItem && <h2 className="searchItem">{this.state.searchItem} Recipes</h2>}
                        </div>
                  </div>
            )
      }
}