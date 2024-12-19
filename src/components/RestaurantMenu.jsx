import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const dummy = 'Dummy Data';
  const resInfo = useRestaurantMenu(resID);
  const [showIndex, setShowIndex] = useState (0);
  

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
    sla,
    feeDetails,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <NavbarComponent />
      <div>
        <h1 className="font-bold text-2xl my-6">{name}</h1>
        <h5>
          ⭐{avgRatingString} <span>({totalRatingsString})</span>{" "}
          <span>{costForTwoMessage}</span>
        </h5>
        <h5>{cuisines.join(" , ")}</h5>
        <h5>{sla.slaString}</h5>
        <h5>{feeDetails.message}</h5>
      </div>

      {/* Categories Accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title || index}
          data={category?.card?.card}
          showItems={index===showIndex ?true: false}
          setShowIndex={()=>setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
