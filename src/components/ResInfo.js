import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import MenuCatagory from "./MenuCatagory";
import { useState } from "react";

const ResInfo = () => {
const resMenu = useResMenu();
const [showIndex , setShowIndex] = useState();
if (resMenu === null){ return <Shimmer/>}
const {name,cloudinaryImageId,city,costForTwoMessage} =
 resMenu?.cards[2]?.card?.card?.info;
 const catgory=resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return(
        <div className="m-5">
            <div className="text-center font-bold">
            <h1>{name}</h1>
            <h2>{city}</h2>
            <h2>{costForTwoMessage}</h2>
            </div>
        {catgory.map((catgory , index)=>
        <MenuCatagory
        key={catgory?.card?.card?.title}
         data={catgory?.card?.card}
        showMenu = {index === showIndex? true : false} 
        setShowIndex = {()=>setShowIndex(index)}
        setShowMenu  = {()=>setShowIndex()}/>)
         }
        </div>
    )
};

export default ResInfo;