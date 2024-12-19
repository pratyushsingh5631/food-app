import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  
  useEffect(() => {
    fetchData();
  }, []); 

  

    const fetchData= async ()=>{
        const data = await fetch (MENU_API+resID);
        const json=await data.json();
        setResInfo(json.data);
    };
    return resInfo;

    // try {
    //   const response = await fetch(MENU_API + resID);
    //   if (!response.ok) {
    //     throw new Error(`Error: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   setResInfo(data.data);
    // } catch (error) {
    //   console.error("Failed to fetch restaurant menu:", error);
    //   setResInfo(null); // or handle the error state as needed
    // }
  };


export default useRestaurantMenu;
