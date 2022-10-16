import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import "./ProductCard.css";
function ProductCard({ product }) {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header
        css={{
          position: "absolute",
          zIndex: 1,
          top: -1,
          bgBlur: "#3084F261",
          borderRadius: "6px",
        }}
      >
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="red">
            New
          </Text>
          <Text h3 color="#D9580D">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={imageUrl}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#D9580D66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              Available soon.
            </Text>
            <Text color="#000" size={12}>
              N{price}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="Warning">
                <Text
                  css={{ color: "orange" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  onClick={addProductToCart}
                >
                  Add to cart
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;




// const ProductCard = ({ product }) => (
//   const { imageUrl, name, price } = product;
  
// );




//     <div>
//       <div className="card ">
//         {/* <img src={imageUrl} alt={`${name}`} className="card__img" /> */}
//         <ModalImage small={imageUrl} large={imageUrl} alt={`${name}`} />;
//         <h3 className="card__head">{name}</h3>
//         <p className="card__price">N{price}</p>
//         <button
//           type="button"
//           className="btn buy__btn"
//           onClick={addProductToCart}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>