import React from 'react';


export default class Search extends React.Component{
      render(){
           return(
                  <form className="searchForm" onSubmit={this.props.getRecipeData}>
                        <input type="search" placeholder="search a recipe..." name="recipe_search" className="recipe_search" value={this.props.value}/>
                        <h4>Search Settings</h4>
                        <label>Max Number of Recipes:</label>
                        <select name="max_search_results">
                              <option>10</option>
                              <option>30</option>
                              <option>50</option>
                              <option>100</option>
                        </select>
                        <input name="min_calories" placeholder="min calories" className="min_calories"/>
                        <input name="max_calories" placeholder="max calories" className="max_calories"/>
                        <button className="searchSubmitBtn">Search</button>
                  </form>
            ) 
      }
      
}