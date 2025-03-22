import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

function ListProduct() {
  const recipeItem = [
    {
      img: "./src/assets/Lab_02_b/Italian-style tomato.png",
      name: "Italian-style tomato salad",
      time: 14,
    },
    {
      img: "./src/assets/Lab_02_b/Vegetable and shrimp spaghetti.png",
      name: "Vegetable and shrimp spaghetti",
      time: 15,
    },
    {
      img: "./src/assets/Lab_02_b/Lotus delight salad.png",
      name: "Lotus delight salad",
      time: 20,
    },
    {
      img: "./src/assets/Lab_02_b/Snack cakes.png",
      name: "Snack cakes",
      time: 21,
    },
    {
      img: "./src/assets/Lab_02_b/Salad with cabbage.png",
      name: "Salad with cabbage and shrimp",
      time: 32,
    },
    {
      img: "./src/assets/Lab_02_b/Bean, shrimp, and potato salad.png",
      name: "Bean, shrimp, and potato salad",
      time: 32,
    },
    {
      img: "./src/assets/Lab_02_b/Sunny-side up fried eggs.png",
      name: "Sunny-side up fried eggs",
      time: 32,
    },
    {
      img: "./src/assets/Lab_02_b/Lotus delight salad_01.png",
      name: "Lotus delight salad",
      time: 37,
    },
  ];

  const containerStyle = {
    textAlign: "center",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const cardStyle = {
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    margin: 20,
  };

  const imgStyle = {
    height: "150px",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    transition: "all 0.3s ease",
  };
  
  const rows = Array.from({ length: Math.ceil(recipeItem.length / 4) }, (_, i) => 
    recipeItem.slice(i * 4, i * 4 + 4)
  );

  return (
    <Container style={containerStyle}>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className="g-4" style={{display: "flex", justifyContent: "center" }}>
          {row.map((item, index) => (
            <Col key={index} md={3}>
              <Card
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.2)";
                  e.currentTarget.querySelector("img").style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.querySelector("img").style.transform = "scale(1)";
                }}
              >
                <Card.Img variant="top" src={item.img} style={imgStyle} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>{item.name}</Card.Title>
                  <Card.Text>{item.time} minutes</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default ListProduct;
