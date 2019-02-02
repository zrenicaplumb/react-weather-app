import React from 'react';
import Search from '../../components/RecipeApp/Search';
import Title from '../../components/RecipeApp/Title';
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
            }
            this.getRecipeData = this.getRecipeData.bind(this);
      }

      async getRecipeData(e){
            e.preventDefault();
            console.log(e);
            console.log(e.target);
            console.log(e.target.elements);
            const search = e.target.elements.recipe_search.value;
            const api_call = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
            const data = await api_call.json();
            console.log(data);
            this.setState({
                  recipeData:data,
                  searchItem:data.q,
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
                              </div>
                              {/* : "mustard", from: 0, to: 10, params: {…}, more: true, …}
                                    count: 72248
                                    from: 0
                                    hits: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
                                    more: true
                                    params: {sane: Array(0), q: Array(1), app_key: Array(1), app_id: Array(1)}
                                    q: "mustard"
                                    to: 10 */}
                              {this.state.searchItem && <h2>{this.props.searchItem} Recipes</h2>}
                        </div>
                  </div>
            )
      }
}