import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import {
  logo,
  messenger,
  notification,
  user,
  moonbirds,
} from "../../images/image";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./styles.module.css";
import searchStyles from "./search.module.css";
import { Link } from "react-router-dom";
import HexagonImage from "../Hexagon/Hexagon";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dropdown, setDropDown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCollection, setFilteredCollections] = useState([]);
  const [filteredAccount, setFilteredAccounts] = useState([]);

  const collections = [
    { img: moonbirds, name: "Moonbirds", items: 10000, price: 7.62 },
    { img: moonbirds, name: "Boonbirds", items: 10000, price: 7.62 },
    { img: moonbirds, name: "Moonbirds", items: 10000, price: 7.62 },
    { img: moonbirds, name: "Boonbirds", items: 10000, price: 7.62 },
    { img: moonbirds, name: "Foonbirds", items: 10000, price: 7.62 },
  ];
  const accounts = [
    { img: user, name: "MoonB" },
    { img: user, name: "DoonB" },
    { img: user, name: "ToonB" },
  ];
  const filterData = (query) => {
    const filteredcollections = collections.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    const filteredAccounts = accounts.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredCollections(filteredcollections);
    setFilteredAccounts(filteredAccounts);
  };
  return (
    <>
      <section className={`${styles.header} container`}>
        <img src={logo} alt="#" className={styles.logo} />
        <div className={styles.searchContainer}>
          <div className={styles.inputContainer}>
            <FiSearch className={styles.search} />
            <input
              type="text"
              placeholder="Search items, collections, and accounts"
              className={styles.input}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                filterData(e.target.value);
              }}
            />
            {searchQuery && (
              <div className={searchStyles.searchingContainer}>
                {" "}
                {filteredCollection && (
                  <h2 className={searchStyles.searchTitle}>Collections</h2>
                )}
                {filteredCollection.map((item, i) => (
                  <div className={searchStyles.details} key={i}>
                    <div className={searchStyles.imgAndName}>
                      <img
                        src={item.img}
                        alt="#"
                        className={searchStyles.moonBirds}
                      />
                      <div className={searchStyles.nameAndItems}>
                        <p className={searchStyles.name}>{item.name}</p>
                        <p className={searchStyles.items}>
                          {item.items.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <p className={searchStyles.items}>{item.price} ETH</p>
                  </div>
                ))}
                {filteredAccount && (
                  <h2 className={searchStyles.searchTitle}>Accounts</h2>
                )}
                {filteredAccount.map((item, i) => (
                  <div className={searchStyles.details}>
                    <div className={`${searchStyles.imgAndName} `} key={i}>
                      <div className={searchStyles.moonBirds}>
                        <HexagonImage src={item.img} />
                      </div>

                      <p className={searchStyles.name}>{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.userProfile}>
          <img src={notification} alt="" className={styles.icon} />
          <Link to={"/messages/1"} className={styles.icon}>
            <img src={messenger} alt="" />
          </Link>
          <div className={styles.userContainer}>
            <div
              className={styles.userContainer}
              onClick={() => setDropDown((prev) => !prev)}
            >
              <img src={user} alt="#" className={styles.userImage} />
              {dropdown ? (
                <BsChevronUp className={styles.arrow} />
              ) : (
                <BsChevronDown className={styles.arrow} />
              )}
              {dropdown && (
                <div className={styles.dropdowns}>
                  <p className={styles.text}>Log out</p>
                </div>
              )}
            </div>
          </div>
          {showSidebar ? (
            <RiCloseLine
              color="#fafafa"
              className={styles.close}
              onClick={() => setShowSidebar((prev) => !prev)}
            />
          ) : (
            <RxHamburgerMenu
              className={styles.hamburger}
              onClick={() => setShowSidebar((prev) => !prev)}
            />
          )}
        </div>
      </section>
      <Sidebar showSidebar={showSidebar} />
    </>
  );
};

export default Header;
