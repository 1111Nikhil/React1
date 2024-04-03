import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link}  from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { MAIN_API } from "../utils/constants";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MAIN_API);
      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }
      const json = await response.json();
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestraunt(restaurants);
      setFilteredRestaurant(restaurants);
      console.log(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if(onlineStatus===false){
    return(
     <h1>Please Check Your Internet Connection?</h1>  
    )
  }

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
          key = {restaurant.info.id}
          to = {"/resturant/"+restaurant.info.id} 
          ><RestaurantCard resData={restaurant} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;