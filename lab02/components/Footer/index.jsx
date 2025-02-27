import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("inner")}>
            <div className={cx("left-section")}>
              <div className={cx("about-section")}>
                <h4>About us</h4>
                <p>
                  Welcom to our website, a wonderful place to explore and learn
                  how to cook like a pro.
                </p>
                <form action="">
                  <input type="text" placeholder="Enter your email" />
                  <button>Send</button>
                </form>
              </div>
              <div className={cx("infor-section")}>
                <img src="../src/assets/chefifywhite.png" alt="" />
                <a href="">2023 Chefify Company</a>
                <a href="">Term of Sevicel Privacy Policy</a>
              </div>
            </div>
            <div className={cx("center-section")}>
              <div className={cx("learnmore-section")}>
                <h4>Learn more</h4>
                <a href="">Our cooks</a>
                <a href="">See Our Features</a>
                <a href="">FAQ</a>
              </div>
              <div className={cx("shop-section")}>
                <h4>Shop</h4>
                <a href="">Gift Subscription</a>
                <a href="">Send Us Feedback</a>
              </div>
            </div>
            <div className={cx("right-section")}>
              <h4>Recipes</h4>
              <a href="">What to Cook This Week</a>
              <a href="">Pasta</a>
              <a href="">Dinner</a>
              <a href="">Healthy</a>
              <a href="">Vegetarian</a>
              <a href="">Vegan</a>
              <a href="">Christmas</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
