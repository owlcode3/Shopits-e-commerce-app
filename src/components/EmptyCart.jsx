import React from "react";

function EmptyCart() {
   return (
      <div className="empty-cart">
         <img src="/empty-cart.png" alt="" />
         <h1>Your cart is currently empty</h1>
         <button>back to shop</button>
      </div>
   );
}

export default EmptyCart;
