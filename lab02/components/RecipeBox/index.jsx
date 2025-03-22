import React from "react";
import "./RecipeBox.css";
import ListProduct from "../ListProduct";

function RecipeBox() {
  const user = {
    id: 1,
    name: "Emma Gonzalez",
    img: "./src/assets/Lab_02_b/avatar.png",
    email: "",
    description: [
      "Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times.",
      "She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los",
      "Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.",
    ],
    subscribeCount: 6532,
  };

  const feature = ["Save Recipes", "Folders", "Recipes by Genevieve"];

  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div
      // className="wrapper"
      className="wrapper flex justify-center items-center my-16 p-5 w-full"
      // style={{
      //   padding: "20px",
      //   width: "100%",
      //   display: "flex",
      //   justifyContent: "center",
      //   margin: "60px 0",
      // }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="recipe-box" style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Open sans", width: "100%" }}>
            {user.name}'s Recipe Box
          </h2>
          <div
            className="info-box"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <img src={user.img} alt={user.name} style={{ marginRight: 40 }} />
            <div
              className="decription-box"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div className="description">
                {user.description.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>

              <div className="subcribe-box" style={{ display: "flex" }}>
                <p style={{ color: "#fa439e", marginRight: 20 }}>
                  {user.subscribeCount} Subscribes
                </p>
                <button
                  className="button-share"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "10px",
                    height: "36px",
                    width: "14%",
                    borderRadius: "6px",
                    backgroundColor: "#fa439e",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Share
                  <img src="./src/assets/Lab_02_b/Share fat.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            // width: "100%",
          }}
        >
          <div>
            <div className="feature" style={{ display: "block" }}>
              {feature.map((item, index) => (
                <button
                  key={index}
                  style={{
                    color: "#fa439e",
                    borderRadius: "6px 6px 0 0",
                    padding: 10,
                    border: "none",
                    backgroundColor:
                      selectedTab === index ? "rgb(254, 238, 241)" : "white",
                  }}
                  onClick={() => setSelectedTab(index)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <ListProduct
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeBox;
