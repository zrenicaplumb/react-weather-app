import React from 'react';


export default class Search extends React.Component{
      render(){
           return(
                  <form className="searchForm" onSubmit={this.props.getRecipeData}>
                        <input type="search" placeholder="search a recipe..." name="recipe_search"/>
                        <button className="submitBtn">Search</button>
                  </form>
            ) 
      }
      
}