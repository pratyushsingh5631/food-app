import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";

export const BodyComponent = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [topRes, setTopRes] = useState("Top Rated Restaurants");
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { setUserName, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurants =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection
      </h1>
    );
  }

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  const filterTopRatedRestaurants = () => {
    if (topRes === "Top Rated Restaurants") {
      const filteredList = listOfRestaurant.filter(
        (res) => parseFloat(res.info.avgRating) > 4
      );
      setFilteredRestaurant(filteredList);
      setTopRes("All Restaurants");
    } else {
      setFilteredRestaurant(listOfRestaurant);
      setTopRes("Top Rated Restaurants");
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };

  return (
    <div className="font-[Poppins] px-4">
      <div className="flex justify-between">
        <button
          className="bg-indigo-600 m-2 text-white py-2 px-3 rounded md:ml-8 hover:bg-indigo-400 duration-500"
          onClick={filterTopRatedRestaurants}
        >
          {topRes}
        </button>
        <div className="flex m-2">
          <input
            className="h-8 mt-1 justify-items-stretch border-2 border-indigo-300 hover:border-indigo-600 rounded-lg sm:w-96 md:w-[500px]"
            type="text"
            htmlFor="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>🔎</button>
        </div>
      </div>

      <div>
        <label>UserName:</label>
        <input
          className="p-2 h-8 mt-1 justify-items-stretch border-2 border-indigo-300 hover:border-indigo-600 rounded-lg sm:w-96 md:w-[500px]"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-evenly m-2 p-2">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
