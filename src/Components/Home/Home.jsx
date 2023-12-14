import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "./Home.css";
import mianimags from "./images/mian-imags.jpg";
import logo from "./images/logo.png";
import book from "./images/book.jpg";
import bottomLowerLeft from "./images/bottom-lower-left.png";
import bottomLowerRight from "./images/bottom-lower-right.png";
import calculator from "./images/calculato.jpg";
import telegram from "./images/telegram_icon.png";
import watch from "./images/watch.jpg";
import whatsapp from "./images/WhatsApp_icon.png";
import axios from "axios";
import ItemCard from "../ItemCard/ItemCard";
import { SearchContext } from "../../Contexts/SearchContext";
import Pagination from "@mui/material/Pagination";

const App = () => {
  useEffect(() => {
    gsap.from(".shopAndSave h1", {
      y: 30,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.4,
    });

    gsap.from(".left-writ-tex h3", {
      y: 30,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.4,
    });

    gsap.from(".studentEssentail h4", {
      y: 30,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.4,
    });
  }, []);
};

export default function Home(props) {
  const { searchedItem } = useParams();
  const contentRef = useRef(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedItems, setSearchedItems] = useState([]);
  const [fetchCount, setFetchCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { currentSearch } = useContext(SearchContext);

  // Fetch all items from the database
  useEffect(() => {
    axios
      .get(`/api/dashboard?limit=8&page=${currentPage}`)
      .then((res) => {
        const allItems = res.data;
        setItems(allItems);

        if (searchedItem) {
          const filteredItems = allItems.filter((item) => {
            return item.itemName
              .toLowerCase()
              .includes(searchedItem.toLowerCase());
          });
          setSearchedItems(filteredItems);
        } else {
          setSearchedItems(allItems);
        }
        console.log("In Items rendered on dashboard : ", res.data);

        axios
          .get("/api/count")
          .then((res) => {
            console.log(res.data);
            setFetchCount(res.data.count);
          })
          .catch((err) => {
            console.log(err);
          });

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, props.search]);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {props.category === "" || props.category === null ? (
        <>
          <div className="main">
            <div className="hero">
              <div className="main-left">
                <div className="shopAndSave">
                  <h1> Buy & Sell</h1>
                </div>
                <div className="left-writ-tex">
                  <h3>Your go to destination for budget-friendly </h3>
                </div>
                <div className="studentEssentail">
                  <h4>student essentials</h4>
                </div>
                <div className="btn">
                  <NavLink>
                    <div onClick={scrollToContent}>
                      <span data-attr="Buy"> Buy</span>
                      <span data-attr="Now">Now </span>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="main-right">
                <div className="right-image hidden sm:block">
                  <img src={mianimags} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-button">
            <div className="join-whatsapp-group">
              <button className="whatsapp-btn">
                <div className="wi35px">
                  {" "}
                  <img id="WhatsApp_icon_35px" src={whatsapp} alt="" />{" "}
                </div>
                <div className="wtext">
                  <a href="https://chat.whatsapp.com/DLf9wlGi7T7LQCDGrHllcS">
                    JOIN WHATSAPP GROUP
                  </a>
                </div>
              </button>
            </div>

            <div className="join_telegram_channel">
              <button className="join-telegrma-btn">
                <div className="ti35px">
                  {" "}
                  <img id="telegram_icon_45px" src={telegram} alt="" />{" "}
                </div>
                <div className="tText">
                  <a href="https://t.me/storeiet">JOIN TELEGRAM GROUP</a>
                </div>
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="text-below-btn content" ref={contentRef}>
        <h3>Available Listings :</h3>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-96">
          <InfinitySpin width="200" color="#424242" />
        </div>
      ) : (
        <div className="p-5 flex flex-wrap px-10 justify-center md:justify-start">
          {searchedItems
            .filter(
              (item) =>
                props.category !== "" && props.category === item.category
            )
            .map((item) => (
              <ItemCard key={item._id} rest={item} />
            ))}
          {searchedItems
            .filter((item) => props.category === "" || props.category === null)
            .map((item) => (
              <ItemCard key={item._id} rest={item} />
            ))}
        </div>
      )}

      <div className="flex items-center justify-center">
        <Pagination
          count={Math.ceil(fetchCount / 8)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
          className="bg-slate-50 m-3.5 py-1.5 rounded-full"
        />
      </div>

      <div className="grid-wrapper">
        <div className="image-grid1">
          <img src={book} alt="" />
        </div>
        <div className="image-grid2">
          <div className="image-grid21">
            <img src={calculator} alt="" />
          </div>
          <div className="image-grid22">
            <img src={watch} alt="" />
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="bottom-div">
        <div className="left-bottom-div">
          <img src={bottomLowerLeft} alt="" />
          <div className="text-lower">
            <h2>Sell What You Don't Need,</h2>
            <h2>Buy What You Do</h2>
          </div>
        </div>

        <div className="right-bottom-div">
          <img src={bottomLowerRight} alt="" />
          <div className="text-lower-right">
            <h2>Join the Green Revolution,</h2>
            <h2>One Purchase at a Time</h2>
          </div>
        </div>
      </div>
    </>
  );
}
