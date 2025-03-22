import React from "react";
import classnames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classnames.bind(styles);

const navItem = [
  "What to cook",
  "Recipes",
  "Ingredient",
  "Occasions",
  "About Us",
];

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("inner")}>
          <div className={cx("logo-search-section")}>
            <div className={cx("logo-section")}>
              <img
                src="/src/assets/chefify.png"
                alt="Chefify Logo"
                className={cx("logo")}
              />
            </div>
            <div className={cx("search-section")}>
              <input
                type="text"
                placeholder="cakescasa"
                className={cx("search-input")}
              />
            </div>
          </div>

          <nav className={cx("nav-section")}>
            <ul className={cx("nav-list")}>
              {navItem.map((item, index) => (
                <li className={cx("nav-item")} key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={cx("user-section")}>
            <button
              className="recipe-box"
              style={{
                padding: 0,
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              
            >
              <div className={cx("recipe-box")} style={{margin: 0}}>
                <img src="/src/assets/check.png" alt="Recipe Box" />
                <p>Your Recipe Box</p>
              </div>
            </button>
            <button className={cx("avatar-button")}>
              <img src="/src/assets/avatar.png" alt="User Avatar" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
