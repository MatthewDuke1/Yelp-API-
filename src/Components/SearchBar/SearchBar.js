import React from 'react';
import './SearchBar_style.css';

const sortByOptions = {

    "Best Match": 'best_match',
    "Highest Rated": 'rating',
    "Most Reviewed":'review_count'
};

class searchBar extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        term:[''],
        location:[''],
        sortBy:['best_match']
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    handleTermChange(event){
      this.setState({term:event.target.value});

    }
    handleLocationChange(event){
      this.setState({location: event.target.value});

    }

    getSortByClass(sortByOptions){
      if(sortByOptions === this.state.sortBy){
        return 'active';
      }
      else{
        return '';
      }
  };
    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});
    }


    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOptions =>{
        let sortByOptionsValue =sortByOptions[sortByOptions];
        return <li key={sortByOptionsValue} onClick={this.handleSortByChange(this, sortbyOptionValue)}className={this.getSortByClass(sortByOptionsValue)}>{sortByOptions}</li>
        }
        
    }
    render(){

        return(

        <div class="SearchBar">
        <div class="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div class="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div class="SearchBar-submit">
          <a onClick={this.handleSearch}>Lets Go</a>
        </div>
      </div>
        )
    }
}

export default searchBar;
