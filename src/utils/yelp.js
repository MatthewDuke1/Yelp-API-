


const APIKey = "vNT3tqD34IWoRFRNFXIVUvIHUPa4PoxJwp6WRWxNJJrhftelKvveChTNvTqU0MwdINqis_gAKKN1GGyvt4Qvb3o5PGe0YZCWgcPKI5ZC6tUVRKCluJ8KKGe_ZNN9XHYx";

const Yelp ={
    searchYelp(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        headers:{
            Authorization:`Bearer ${APIKey}`,
        }).then((response) => {
            return response.json();

        }).then((jsonResponse) => {
            if(jsonResponse.Businesses) {
                return jsonResponse.businesses.map(((Business) =>{
                 return{
                     id:business.id,
                     imageSrc: business.image_url,
                     name:business.name,
                     address:business.location.address1,
                     city: business.location.city,
                     state: business.location.state,
                     zipCode: business.location.zip_code,
                     category: business.categories[0].title,
                     rating: business.rating,
                     reviewCount: business.review_count,
                 };
            }));
        })   
    }

};

export default Yelp;