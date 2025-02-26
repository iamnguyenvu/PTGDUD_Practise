import React from "react";
import classnames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classnames.bind(styles);

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
              <li className={cx("nav-item")}>
                <a href="#">What to cook</a>
              </li>
              <li className={cx("nav-item")}>
                <a href="#">Recipes</a>
              </li>
              <li className={cx("nav-item")}>
                <a href="#">Ingredients</a>
              </li>
              <li className={cx("nav-item")}>
                <a href="#">Occasions</a>
              </li>
              <li className={cx("nav-item")}>
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
          <div className={cx("user-section")}>
            <div className={cx("recipe-box")}>
              <img src="/src/assets/check.png" alt="Recipe Box" />
              <p>Your Recipe Box</p>
            </div>
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
