import { CDN_URL } from "../utils/constants";

const ItemList = ({ items,dummy }) => {
  
  const handleAddItem=()=>{
    //dispatch action
  }
    
    return (
      <div className="bg-gray-200">
        {items.map((item) => (
            <div key={item.card.info.id } className="flex justify-between ">
          <div  className="p-2 m-4 w-9/12 border-gray-400 border-b-[1px] text-left ">
            <div className="font-medium">
              <span >{item.card.info.name}</span>
            <span>  ₹ {item?.card?.info?.price/ 100 || item?.card?.info?.defaultPrice/100 }</span>
            </div  >
            <p className="text-sm">{item.card.info.description}</p>
          </div>

            <div className="w-3/12">
            <div className="absolute">
              <button className="p-2 mx-4 my-20 rounded-lg bg-black text-white shadow-lg "
              onClick={handleAddItem} 
              >
                Add +
              </button>
            </div>
            <img className="p-4 object-contain rounded-lg" src={CDN_URL+item.card.info.imageId} alt="img" />
            </div>
            </div>
          
          
          
        ))}
      </div>
    );
  };
  
  export default ItemList;
  