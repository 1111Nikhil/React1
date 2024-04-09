import { IMAGE_URL } from "../utils/constants";
import { additem, removeitem } from "../utils/cartSlice";
import {useDispatch} from "react-redux"
const MenuItems = ({menu}) =>{
    const dispath = useDispatch();
    const HandelAddItem = (item) =>{
         dispath(additem(item));
    }
    const HandelRemoveItem= (item) =>{
        dispath(removeitem(item));
    }
    return(
        <div>
            {menu.map((item)=>(
                <div key={item.card.info.id}
                className="flex justify-between my-5 border-b-2 p-2">
                <div className="menu">
                <h3 className=" font-bold">{item.card.info.name}</h3>
                <h4 className="font-semibold">Rs{item.card.info.price/100 || item.card.info.defaultPrice/100} -
                {item.card.info.ratings.aggregatedRating.rating}star</h4>
                <p className="w-[600px]">{item.card.info.description}</p>
             </div> 
             <div> 
             
             <img  className="w-24 h-32 rounded-xl"
            alt= "Item-Image"
            src={IMAGE_URL + item.card.info.imageId} /> 
            <diV className="text-white bg-slate-900 mx-6 relative top-[-15px] p-2
            rounded-2xl">
            {/* <button className="text-white bg-slate-900 mx-6 relative top-[-15px] p-1
            rounded-2xl" */}
            <button className="mx-1"
            onClick={() =>HandelRemoveItem(item)}>-</button> 
            <button
            onClick={() =>HandelAddItem(item)}
            >Add +</button> 
            </diV>
           </div>
                </div>
            ))}
        </div>
    )
}

export default MenuItems;