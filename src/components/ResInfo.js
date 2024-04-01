import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API,IMAGE_URL } from "../utils/constants";

const ResInfo = () => {
const [resMenu, setResMenu] = useState(null);
//console.log(useState());
const {resId} = useParams();
useEffect(()=>{fetchMenu()},[])

const fetchMenu = async() => {
    const data = await fetch(
        MENU_API + resId);
    console.log(data);
    const json = await data.json();
    
     
    console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    
     setResMenu(json.data);
    

}
if (resMenu === null){ return <Shimmer/>}
//console.log(resMenu);
const {name,cloudinaryImageId,city,costForTwoMessage} =
 resMenu?.cards[2]?.card?.card?.info;
 const {itemCards,carousel} = (resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

   

    return(
        <div className="resinfo">
            <div className="resdetail">
            <h1>{name}</h1>
            <h2>{city}</h2>
            <h2>{costForTwoMessage}</h2>
            </div>
           
            <div className="info">
            <ul>
            { (resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) !== undefined ? (
    itemCards.map((item) => (
        <li key={item.card.info.id}>
            <div className="menuitem">
            <div className="menu">
            <h3>{item.card.info.name}</h3>
            <h4>Rs{item.card.info.price/100 || item.card.info.defaultPrice/100} -
            {item.card.info.ratings.aggregatedRating.rating}star</h4>
            <p>{item.card.info.description}</p>
             </div>  
             <img  className="itemimg"
            alt= "Item-Image"
            src={IMAGE_URL + item.card.info.imageId} />      
           </div>
           
            
           
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

        </div>
    )
};

export default ResInfo;