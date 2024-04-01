import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const ResInfo = () => {
const [resMenu, setResMenu] = useState(null);
const {resId} = useParams();
useEffect(()=>{fetchMenu()},[])

const fetchMenu = async() => {
    const data = await fetch(
        MENU_API + resId);
    console.log(data);
    const json = await data.json();
    //console.log(json);
     //const menuName = json?.data?.cards[2]?.card?.card?.info;
     
    //const menuList = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log(menuList);
     setResMenu(json.data);
    //console.log(menuName); 

}
if (resMenu === null){ return <Shimmer/>}
//console.log(resMenu);
const {name,cloudinaryImageId,city,costForTwoMessage} =
 resMenu?.cards[2]?.card?.card?.info;
 const {itemCards,carousel} = (resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

   

    return(
        <div className="resinfo">
            <h1>{name}</h1>
            <h2>{cloudinaryImageId}</h2>
            <h2>{city}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>

            { (resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) !== undefined ? (
    itemCards.map((item) => (
        <li key={item.card.info.id}>
            {item.card.info.name}<br />
            {item.card.info.price} -
            {item.card.info.ratings.aggregatedRating.rating}
        </li>
    ))
) : (
    carousel.map((item) => (
        <li key={item.dish.info.id}>
            {item.dish.info.name}
        </li>
    ))
)}
               
            </ul>

        </div>
    )
};

export default ResInfo;