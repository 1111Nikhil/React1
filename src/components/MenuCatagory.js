import { useState } from "react";
import MenuItems from "./MenuItems";

const MenuCatagory = ({data, showMenu, setShowIndex,setShowMenu})=>{
const HandelMenu = () => {
 showMenu===true?setShowMenu():setShowIndex();
    
}
   
    return(
        <div className="shadow-sm my-5 mx-auto w-7/12"> 
        <div className="flex justify-between font-bold cursor-pointer
         shadow-md bg-slate-100 p-3 rounded-lg"
        onClick={HandelMenu}>
         <span>{data.title}({data.itemCards.length})</span>
         <span>+</span>  
        </div>
        {showMenu && <MenuItems
        key={data.title}
         menu={data.itemCards}/>} 
        </div>
    );
};

export default MenuCatagory;