import React from 'react';
import './BusinessListB.css';
import Business_logic from '../Business/Business_logic';

const Business extends React.Component{
    render(){
    <div className="BusinessList">
  {

    this.props.businesses.map((business) =>{
      return <Business business={business} />;
    });

  }
</div>

    }

}

export default BusinessListA;
