import RestaurantCard,{restaurantCardOpen} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link}  from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { MAIN_API , BG_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantOpen = restaurantCardOpen(RestaurantCard);
  const {loginUser,setUserName} = useContext(UserContext);


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
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if(onlineStatus===false){
    return(
     <h1>Please Check Your Internet Connection?</h1>  
    )
  }

  
  if (filteredRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex m-4">
        <div className="search">
          <input
            type="text"
            className="search-box  border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="font-bold text-white bg-blue-500 py-1 px-2 hover:bg-blue-700"
            onClick={() => {
                  const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button className="font-bold text-white bg-blue-500 py-1 px-2 hover:bg-blue-700 mx-5"
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
        User:<input className="border border-black mx-2 px-2"
        maxLength={10}
        value={loginUser}
        onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <img src={BG_IMG} />
      <div className="flex flex-wrap m-6 ">
        {filteredRestaurant.map((restaurant) => (
        <Link id= {restaurant.info.id} 
          key = {restaurant.info.id}
          to = {"/resturant/"+restaurant.info.id} 
          >
            {restaurant.info.isOpen?<RestaurantOpen resData={restaurant}/>:
            <RestaurantCard resData={restaurant} />}
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;