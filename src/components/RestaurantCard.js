import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="m-3 w-56 h-[300px] text-center hover:shadow-2xl" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const restaurantCardOpen = (RestaurantCard) =>{
  return ((props) =>{
    return(
      <div>
        <label className="bg-black text-white m-2 absolute px-2 rounded-lg">
          Open</label>
        <RestaurantCard {...props}/>
      </div>
    );
  });
};

export default RestaurantCard;