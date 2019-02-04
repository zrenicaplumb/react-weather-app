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
                  nutrition:[],
            }
            this.getRecipeData = this.getRecipeData.bind(this);
            this.prepareData = this.prepareData.bind(this);
      }

      async prepareData(data, searchItem){
            const recipes = [];
            const ingredientText = [];
            const ingredients = [];
            const nutrition = [];

            console.log(data);
            data.hits.forEach(function(item){
                  recipes.push(item.recipe);
            })
            recipes.forEach(function(recipe){
                  ingredients.push(recipe.ingredients);
                  nutrition.push(recipe.digest);
            })
            ingredients.forEach(function(ingredient){
                  ingredientText.push(ingredient.text);
            })
            this.setState({
                  recipeData:data,
                  recipes:recipes,
                  ingredients:ingredients,
                  ingredientText:ingredientText,
                  searchItem:searchItem,
                  nutrition:nutrition
            })
      }

      async componentDidMount(){
            const search = 'random';
            const api_call = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&to=25`);
            const data = await api_call.json();
            this.prepareData(data);
           
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
            this.prepareData(data, searchItem);
            console.log(this.state)
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
                                    {this.state.searchItem && <h2 className="searchItem">{this.state.searchItem} Recipes</h2>}
                                    <div className="recipeListContainer">{}
                                    {this.state.recipes && this.state.recipes.map(function(recipe){
                                          
                                          return(
                                          
                                                <div className="recipe" key={recipe.label}>
                                                      <Recipe
                                                            label={recipe.label}
                                                            image={recipe.image}
                                                            alt={recipe.label}
                                                            calories={recipe.calories}
                                                            totalTime={recipe.totalTime}
                                                            shareas={recipe.shareas}
                                                            source={recipe.source}
                                                            url={recipe.url}
                                                            // nutrition={this.state.nutrition}
                                                      />
                        
                                                </div>    
                                          )
                                    }, this)}
                              
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }
}