import ItemList from "./ItemList";

const RestaurantCategory = ( {data, showItems, setShowIndex,dummy} ) => {
    console.log(data)
  const handleClick = () => {
    setShowIndex();
  };
  
 
  return (
    <div className="flex justify-between">
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span>
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data?.itemCards}  dummy={dummy}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
