import { IMAGE_URL } from "../utils/constants";
const MenuItems = ({menu}) =>{
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
            <button className="text-white bg-slate-900 mx-6 relative top-[-15px] p-1
            rounded-2xl">Add +</button> 
           </div>
                </div>
            ))}
        </div>
    )
}

export default MenuItems;