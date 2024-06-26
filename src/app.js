import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResInfo from "./components/ResInfo";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext.js"
import Cart from "./components/Cart.js"
import {Provider} from "react-redux"
import appStore from "./utils/appStore.js"

 
 const About = lazy(()=>import("./components/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loginUser:userName,setUserName}}>
      <div className="app">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
      {path: "/",
       element: <Body/>,
      },
      {
        path: "/about",
        element:(
        <Suspense
          fallback={<Shimmer/>}>
          <About/></Suspense>)
      },
      {
        path: "/contact",
        element: <Contact/>
        
      },
      {
        path: "/cart",
        element: <Cart/>
        
      },
      {
        path: "/resturant/:resId",
        element: <ResInfo/>,
        
      },
    ],
    errorElement: <Error/>
  },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);