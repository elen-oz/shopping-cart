import { useState } from "react";

export default function useCart() {
  const [cartItems, setCartItems] = useState([]),
    [count, setCount] = useState(0);

  const get = () => {
    return cartItems;
  };

  // const set = () => {};
  const addRemoveFromCart = (id, quantity) => {
    let foundItemInCart = false;

    const cart = cartItems.map((d) => {
      let newCount = d.count;

      if (d.id === id) {
        foundItemInCart = true;
        newCount = newCount + quantity;
      }

      return {
        ...d,
        count: newCount,
      };
    });

    if (!foundItemInCart && quantity > 0) {
      cart.push({ id, count: quantity });
    }

    const readyCart = cart.filter((d) => d.count > 0);

    setCartItems(readyCart);
  };

  const add = (id, quantity) => {
    addRemoveFromCart(id, quantity);
    // setCount(count + 1);
  };

  const remove = (id, quantity) => {
    addRemoveFromCart(id, -quantity);
    // setCount(count - 1);
  };

  return {
    get,
    // set,
    add,
    remove,
    // count
  };
}
