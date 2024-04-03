import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantFilter from "../utils/useRestaurantFilter";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const { data, loading, error } = useFetchData(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9827745&lng=77.6130519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const { filteredRestaurants, searchText, handleSearchTextChange, minRating, handleRatingChange } =
    useRestaurantFilter(data);

  if (onlineStatus === false) {
    return <h1>Please Check Your Internet Connection?</h1>;
  }

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <h1>Error fetching data: {error.message}</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => handleSearchTextChange(e.target.value)}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={() => handleRatingChange(4.5)}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link id={restaurant.info.id} to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
