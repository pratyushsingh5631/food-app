import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    areaName,
    sla = {},
    costForTwo,
    avgRating,
  } = resData?.info || {};

  return (
    <div className="text-black m-3 p-[5px] w-[300px] rounded-md bg-zinc-50 hover:cursor-pointer hover:scale-95 hover:bg-indigo-100 card overflow-hidden">
      
      <img
        className="w-full h-[200px] rounded-md object-cover"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="Restaurant"
      />
      
      <div className="p-3 h-[160px] object-cover no-underline">
        <h6 className="font-bold text-lg mb-0 no-underline">{name}</h6>
        <h6 className="text-sm text-gray-600 mb-0 no-underline">
          ⭐{avgRating} • {sla.deliveryTime || 'N/A'} mins
        </h6>
        <p className="text-sm text-gray-600 mb-0 no-underline">
          {cuisines.join(", ")}
        </p>
        <p className="text-sm text-gray-600 mb-0 no-underline">{areaName}</p>
        <p className="text-sm text-gray-600 no-underline">{costForTwo}</p>
      </div>

      
    </div>
  );
};

//higher order component
//input -Restaurant card ==> Restaurant card  promoted 

 export const withPromotedLabel =(RestaurantCard)=>{
  return (props)=>{
    return(
     <div>
      <label className="absolute bg-black text-white m-2 px-3 py-1 rounded-lg z-1"> Promoted </label>
      <RestaurantCard {...props}/>
     </div>
    )
  }
 }


export default RestaurantCard;
