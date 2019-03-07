import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/Searchbar';
import BusinessList from '..src/BusinessListA';
import Yelp from '../../utils/Yelp';


const Business = {
  imageSrc: '',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends Component {

  constuctor(props){
    super(props);
    this.state = {
      businesses:[],
    };

      this.searchYelp =this.searchYelp.bind(this);
    }

  }
  searchYelp(term,location,sortBy){
      Yelp.searchYelp(term, location,sortBy).then((business)=>{
        this.setState({businesses: businesses});
      })

  render() {
    return (
      <div className="App">
          <h1>Ravenous</h1>
           <SearchBar searchYelp={this.searchYelp}/>
           <BusinessList businesses={businesses}/>
        </header>
      </div>
    );
  }
}



export default App;
