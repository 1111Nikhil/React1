import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link}  from "react-router-dom"

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9827745&lng=77.6130519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }
      const json = await response.json();
      console.log(json);
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestraunt(restaurants);
      setFilteredRestaurant(restaurants);
      console.log(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  console.log(filteredRestaurant.length);
  if (filteredRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredRestaurant);
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
        //  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        <Link id= {restaurant.info.id} 
          to = {"/resturant/"+restaurant.info.id} 
          >
            <RestaurantCard resData={restaurant} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;