import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { useParams } from "react-router-dom";

const useResMenu = () =>{
    const {resId} = useParams();
    const [resMenu, setResMenu] = useState(null);
    
    useEffect(()=>{fetchMenu()},[]);

    const fetchMenu = async() => {
        const data = await fetch( MENU_API + resId);
        console.log(data);
        const json = await data.json();  
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);   
         setResMenu(json.data);
        
    
    }
    return resMenu;   
}
export default useResMenu;
