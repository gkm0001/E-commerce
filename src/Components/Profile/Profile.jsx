import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthContext";
import { InfinitySpin } from "react-loader-spinner";
import ItemCard from "../../Components/ItemCard/ItemCard";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listingLoading, setListingLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  // Fetch user details and listed items from the database
  useEffect(() => {
    axios.post("/api/profile", { token: currentUser.token }).then((res) => {
      setUser(res.data);
      setLoading(false);
    });
    // axios
    //   .get("/api/itemsListedByAdmin")
    //   .then((res) => {
    //     setItems(res.data);
    //     setListingLoading(false);
    //   });
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
        <h1 className="w-fit m-auto text-3xl text-white text-center font-semibold bg-red-500 rounded-xl py-2 px-5 ">
          {currentUser.token ===
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIxMDA1MjE1MjAwNDFAaWV0bHVja25vdy5hYy5pbiIsImlhdCI6MTcwMTEwODc5MiwiZXhwIjoxNzAxMTk1MTkyfQ.tuoLoyp6HZLgUTqtQy1QTTA5P4Qlc_1uKGO0RRwYtzM" ? (
            <>Admin Profile</>
          ) : (
            <>User Profile</>
          )}
        </h1>

        {loading ? (
          <div className="flex items-center justify-center h-96">
            <InfinitySpin width="200" color="#424242" />
          </div>
        ) : (
          <div>
            <div className="my-7 mx-auto w-[97%] sm:w-[75%] md:w-[70%] text-xl text-red-600 font-semibold flex flex-col gap-7 p-4 sm:p-10 border-2 border-solid border-red-600 rounded-xl ">
              {user ? (
                <div>
                  <div>
                    <span className="text-gray-800">Name : </span> {user.name}
                  </div>
                  <div className="text-xl text-red-600 font-semibold">
                    <span className="text-gray-800">Email : </span>
                    <span className="break-words">{user.email}</span>
                  </div>
                  <div className="text-xl text-red-600 font-semibold">
                    <span className="text-gray-800">Phone : </span>
                    <span className="break-words">{user.phone}</span>
                  </div>
                  <div className="text-xl text-red-600 font-semibold">
                    <span className="text-gray-800">Address : </span>
                    <span className="break-words">{user.address}</span>
                  </div>

                  <div className=" m-3.5">
                    <button
                      className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white text-base py-2 rounded-lg w-fit"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              ) : (
                <div>Loading user data...</div>
              )}

              {/* {listingLoading &&
              currentUser.token ===
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjIxMDA1MjE1MjAwNDFAaWV0bHVja25vdy5hYy5pbiIsImlhdCI6MTcwMTEwODc5MiwiZXhwIjoxNzAxMTk1MTkyfQ.tuoLoyp6HZLgUTqtQy1QTTA5P4Qlc_1uKGO0RRwYtzM" ? (
                <div className="flex items-center justify-center h-96">
                  <InfinitySpin width="200" color="#424242" />
                </div>
              ) : (
                <>
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
                </>
              )} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
