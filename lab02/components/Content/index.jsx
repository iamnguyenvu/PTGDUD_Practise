import React from "react";
import classnames from "classnames/bind";
import styles from "./Content.module.scss";

const cx = classnames.bind(styles);

function Content() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("inner")}>
            <div className={cx("content-section")}>
              <div className={cx("left-section")}>
                <div className={cx("left-content")}>
                  <div className={cx("filter-group")}>
                    <div className={cx("filter")}>
                      <img src="../src/assets/list_filter.png" alt="" />
                      <h3>FILTERS</h3>
                    </div>

                    <div className={cx("type-group")}>
                      <div className={cx("type-title")}>
                        <h4>Type</h4>
                      </div>

                      <div className={cx("type-option-group")}>
                        <div className={cx("left-type-option")}>
                          <div className={cx("type-item")}>
                            <img src="../src/assets/checkbox.png" alt="" />
                            <p>Pan - fried</p>
                          </div>
                          <div className={cx("type-item")}>
                            <img src="../src/assets/checkboxpink.png" alt="" />
                            <p>Grilled</p>
                          </div>
                          <div className={cx("type-item")}>
                            <input type="checkbox" name="" id="" />
                            <p>Sauteed</p>
                          </div>
                          <div className={cx("type-item")}>
                            <input type="checkbox" name="" id="" />
                            <p>Steamed</p>
                          </div>
                        </div>
                        <div className={cx("right-type-option")}>
                          <div className={cx("type-item")}>
                            <input type="checkbox" name="" id="" />
                            <p>Stir - fried</p>
                          </div>
                          <div className={cx("type-item")}>
                            <input type="checkbox" name="" id="" />
                            <p>Roasted</p>
                          </div>
                          <div className={cx("type-item")}>
                            <input type="checkbox" name="" id="" />
                            <p>Baked</p>
                          </div>
                          <div className={cx("type-item")}>
                            <input type="checkbox" name="" id="" />
                            <p>Steaved</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("time-group")}>
                    <div className={cx("time-title")}>
                      <h4>Time</h4>
                    </div>
                    <img src="../src/assets/slider.png" alt="" />
                  </div>

                  <div className={cx("rating-group")}>
                    <div className={cx("time-title")}>
                      <h4>Rating</h4>
                    </div>
                    <div>
                      <img src="../src/assets/checkbox.png" alt="" />
                      <img src="../src/assets/rating_5.png" alt="" />
                    </div>
                    <div>
                      <img src="../src/assets/checkbox.png" alt="" />
                      <img src="../src/assets/rating_4.png" alt="" />
                    </div>
                    <div>
                      <img src="../src/assets/checkboxpink.png" alt="" />
                      <img src="../src/assets/rating_3.png" alt="" />
                    </div>
                    <div>
                      <img src="../src/assets/checkboxpink.png" alt="" />
                      <img src="../src/assets/rating_2.png" alt="" />
                    </div>
                    <div>
                      <img src="../src/assets/checkboxpink.png" alt="" />
                      <img src="../src/assets/rating_1.png" alt="" />
                    </div>
                  </div>

                  <div className={cx("button-section")}>
                    <button className={cx("button-apply")}>Apply</button>
                  </div>
                </div>
              </div>

              <div className={cx("right-content")}>
                <h1>Sorry, no result were found for "cakescasca"</h1>
                <img src="../src/assets/nothing.png" alt="" />
                <p>We have all your independence Day sweet covered.</p>
                <div className={cx("tag-group")}>
                  <div className={cx("tag")}>Sweet Cake</div>
                  <div className={cx("tag", "tag-violet")}>Black Cake</div>
                  <div className={cx("tag")}>Pozole Verde</div>
                  <div className={cx("tag", "tag-saphire")}>Healthy Food</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
