import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthContext";
import { InfinitySpin } from "react-loader-spinner";
import ItemCard from "../../Components/ItemCard/ItemCard";

const Profile = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [listingLoading, setListingLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  // Fetch user details and listed items from the database
  useEffect(() => {
    axios.get("/api/itemsListedByAdmin").then((res) => {
      console.log("The response is : ",res.data);
      setItems(res.data);
      setListingLoading(false);
    });
  }, []);

  // Delete an item from the database
  const deleteItem = (id) => {
    axios.post("/api/deleteItem", { id: id }).then((res) => {
      console.log(res.data);
      setItems(items.filter((item) => item._id !== id));
    });
  };

  // Update an item in the database
  const updateItem = (id) => {
    navigate(`/updateItem/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("details");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="bg-gray-800">
      <div className="max-w-5xl mx-auto min-h-screen bg-white p-6 rounded-lg shadow-md">
        {listingLoading ? (
          <div className="flex items-center justify-center h-96">
            <InfinitySpin width="200" color="#424242" />
          </div>
        ) : (
          <div>
            <div className="my-7 mx-auto w-[97%] sm:w-[75%] md:w-[70%] text-xl text-red-600 font-semibold flex flex-col gap-7 p-4 sm:p-10 border-2 border-solid border-red-600 rounded-xl ">
              <div className="mt-2 text-2xl text-gray-800 font-semibold">
                <span>Your Listings : </span>
              </div>
              <div>
                {items.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {items.map((item) => (
                      <div
                        key={item._id}
                        className="bg-white rounded-lg shadow-md p-4"
                      >
                        <ItemCard rest={item} width="full" />
                        <div className="flex justify-end">
                          <button
                            onClick={() => updateItem(item._id)}
                            className="bg-green-500 hover:bg-green-800 text-white text-sm py-1 px-4 rounded-lg w-fit mx-auto mt-3"
                          >
                            Update Item
                          </button>
                          <button
                            onClick={() => deleteItem(item._id)}
                            className="bg-red-500 text-white text-sm py-1 px-4 rounded-lg w-fit mx-auto mt-3"
                          >
                            Delete Item
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No items to display</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
