import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

function Cart() {
   const [cart, setCart] = useState([]);
   return (
      <div
         className="cart"
         style={{
            marginTop: !cart.length ? "20rem" : "25rem",
            marginBottom: !cart.length ? "0" : "25rem"
         }}
      >
         <h1 className="cart__heading">Shopping Cart</h1>
         {cart.length ? <FilledCart /> : <EmptyCart />}
      </div>
   );
}

export default Cart;
