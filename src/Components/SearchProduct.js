import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { macarons } from "../macarons";
import { useStateValue } from "../CartContext";
import { ADD_TO_BASKET } from "../reducer";

const SearchProduct = ({ name }) => {
  const [{ basket }, dispatch] = useStateValue();

  const index = macarons.findIndex((x) => x.name === name);
  const { id, description, price, img } = macarons[index];

  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id: id,
        title: name,
        description: description,
        price: price,
        img: img,
      },
    });
  };

  return (
    <div className="search-product">
      <a>
        <li>{name}</li>
        <button onClick={addToBasket}>
          <ShoppingCartIcon></ShoppingCartIcon>
        </button>
      </a>
    </div>
  );
};

export default SearchProduct;
