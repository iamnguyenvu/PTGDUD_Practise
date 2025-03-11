import React from "react";
import classnames from "classnames/bind";
import styles from "./Content.module.scss";

const cx = classnames.bind(styles);

const leftFilterItem = [
  { img: "../src/assets/checkbox.png", name: "Pan - fried" },
  { img: "../src/assets/checkboxpink.png", name: "Grilled" },
  { img: "", name: "Sauteed" },
  { img: "", name: "Steamed" },
];
const rightFilterItem = ["Stir - fried", "Roasted", "Baked", "Steved"];

const suggestions = [
  { name: "Sweet Cake" },
  { name: "Black Cake", color: "violet" },
  { name: "Pozole Verde" },
  { name: "Healthy Food", color: "saphire" },
];

const ratingOptions = [
  {
    checkbox: "../src/assets/checkbox.png",
    rating: "../src/assets/rating_5.png",
  },
  {
    checkbox: "../src/assets/checkbox.png",
    rating: "../src/assets/rating_4.png",
  },
  {
    checkbox: "../src/assets/checkboxpink.png",
    rating: "../src/assets/rating_3.png",
  },
  {
    checkbox: "../src/assets/checkboxpink.png",
    rating: "../src/assets/rating_2.png",
  },
  {
    checkbox: "../src/assets/checkboxpink.png",
    rating: "../src/assets/rating_1.png",
  },
];

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
                          {leftFilterItem.map((item, index) => (
                            <div className={cx("type-item")} key={index}>
                              {item.img !== "" ? (
                                <img src={item.img} alt="" />
                              ) : (
                                <input type="checkbox" />
                              )}
                              <p>{item.name}</p>
                            </div>
                          ))}
                        </div>

                        <div className={cx("right-type-option")}>
                          {rightFilterItem.map((item, index) => (
                            <div className={cx("type-item")} key={index}>
                              <input type="checkbox" />
                              <p>{item}</p>
                            </div>
                          ))}
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
                    {ratingOptions.map((e) => (
                      <div>
                        <img src={e.checkbox} alt="" />
                        <img src={e.rating} alt="" />
                      </div>
                    ))}
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
                  {suggestions.map((element, index) => (
                    <div
                      key={index}
                      className={cx(
                        "tag",
                        element.color && `tag-${element.color}`
                      )}
                    >
                      {element.name}
                    </div>
                  ))}
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
