import React, { lazy,Suspense,useEffect,useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import CartComponent from "./components/CartComponent";
import OrderComponent from "./components/OrderComponent";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";
import "bootstrap";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore"
import { Provider } from  "react-redux";

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  const [userName,setUserName]=useState();

//  authentication 
useEffect(()=>{
  const data={
    name: "Manas Kumar",
  };
  setUserName(data.name);
},[]);

return (
  <Provider store={appStore}>
  <UserContext.Provider value={{loggedInUser:userName, setUserName }}>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/orders" element={<OrderComponent />} />
        <Route path="/restaurant/:resID" element={<RestaurantMenu />} />
        <Route
          path="/grocery"
          element={
            <Suspense fallback={<div><Shimmer/></div>}>
              <Grocery />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </div>
    </UserContext.Provider>
    </Provider>
  );
}

export default App;
