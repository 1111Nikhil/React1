//import MenuItems from "./MenuItems";
import MenuItems from "./MenuItems";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux"
import { clearitem } from "../utils/cartSlice";

const Cart = () =>{
    const cartitems = useSelector((store)=> store.cart.item);
    const dispatch = useDispatch();
    const HandelClearItem = () =>{
          dispatch(clearitem());
    }
    return(
        <div className="w-7/12  text-center mx-auto my-4 p-4">
            <div className="font-bold m-2 flex justify-between ">
                <h1>Cart</h1>
                <button className="m-4 px-4 bg-slate-600 rounded-md"
                onClick={HandelClearItem}
                > Clear                    
                </button>
                </div>
            <div className="text-center bg-slate-200">            
                <MenuItems menu={cartitems}/>
            </div>
        </div>
    )
};


export default Cart;
