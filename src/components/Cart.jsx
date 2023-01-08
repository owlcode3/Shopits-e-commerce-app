import { FaTimes } from "react-icons/fa";
function Cart() {
   return (
      <div className="cart">
         <h1 className="cart__heading">Shopping Cart</h1>
         <div className="cart__body">
            <div className="cart__items">
               <div className="cart__item">
                  <img className="cart__img" src="/mi-25.webp" alt="" />
                  <div className="cart__details">
                     <div className="cart__details-box-1">
                        <div className="cart__name-box">
                           <span className="cart__product-name">Midnight Gown-ish</span>
                           <span className="cart__cancel">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 19 18"
                                 class="cart__close-icon"
                              >
                                 <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g
                                       fill="#000"
                                       transform="translate(-927 -991) translate(900.277 962)"
                                    >
                                       <g transform="translate(27 29)">
                                          <path d="M10.627 9.013l6.872 6.873.708.707-1.415 1.414-.707-.707-6.872-6.872L2.34 17.3l-.707.707L.22 16.593l.707-.707L7.8 9.013.946 2.161l-.707-.708L1.653.04l.707.707L9.213 7.6 16.066.746l.707-.707 1.414 1.414-.707.708-6.853 6.852z"></path>
                                       </g>
                                    </g>
                                 </g>
                              </svg>
                           </span>
                        </div>
                        <div className="cart__size-color">
                           <span>Black / Medium</span>
                        </div>
                        <div className="cart__price-box">
                           <span>$2000</span>
                        </div>
                     </div>
                     <div className="cart__details-box-2">
                        <div className="cart__quality">
                           <button>-</button>
                           <span>4</span>
                           <button>+</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cart__item">
                  <img className="cart__img" src="/mi-25.webp" alt="" />
                  <div className="cart__details">
                     <div className="cart__details-box-1">
                        <div className="cart__name-box">
                           <span className="cart__product-name">Midnight Gown-ish</span>
                           <span className="cart__cancel">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 19 18"
                                 class="cart__close-icon"
                              >
                                 <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g
                                       fill="#000"
                                       transform="translate(-927 -991) translate(900.277 962)"
                                    >
                                       <g transform="translate(27 29)">
                                          <path d="M10.627 9.013l6.872 6.873.708.707-1.415 1.414-.707-.707-6.872-6.872L2.34 17.3l-.707.707L.22 16.593l.707-.707L7.8 9.013.946 2.161l-.707-.708L1.653.04l.707.707L9.213 7.6 16.066.746l.707-.707 1.414 1.414-.707.708-6.853 6.852z"></path>
                                       </g>
                                    </g>
                                 </g>
                              </svg>
                           </span>
                        </div>
                        <div className="cart__size-color">
                           <span>Black / Medium</span>
                        </div>
                        <div className="cart__price-box">
                           <span>$2000</span>
                        </div>
                     </div>
                     <div className="cart__details-box-2">
                        <div className="cart__quality">
                           <button>-</button>
                           <span>4</span>
                           <button>+</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cart__item">
                  <img className="cart__img" src="/mi-25.webp" alt="" />
                  <div className="cart__details">
                     <div className="cart__details-box-1">
                        <div className="cart__name-box">
                           <span className="cart__product-name">Midnight Gown-ish</span>
                           <div className="cart__cancel">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 19 18"
                                 class="cart__close-icon"
                              >
                                 <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g
                                       fill="#000"
                                       transform="translate(-927 -991) translate(900.277 962)"
                                    >
                                       <g transform="translate(27 29)">
                                          <path d="M10.627 9.013l6.872 6.873.708.707-1.415 1.414-.707-.707-6.872-6.872L2.34 17.3l-.707.707L.22 16.593l.707-.707L7.8 9.013.946 2.161l-.707-.708L1.653.04l.707.707L9.213 7.6 16.066.746l.707-.707 1.414 1.414-.707.708-6.853 6.852z"></path>
                                       </g>
                                    </g>
                                 </g>
                              </svg>
                           </div>
                        </div>
                        <div className="cart__size-color">
                           <span>Black / Medium</span>
                        </div>
                        <div className="cart__price-box">
                           <span>$2000</span>
                        </div>
                     </div>
                     <div className="cart__details-box-2">
                        <div className="cart__quality">
                           <button>-</button>
                           <span>4</span>
                           <button>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="cart__coupon-box">
                  <input className="cart__coupon-input" type="text" placeholder="coupon code" />
                  <button className="cart__coupon-btn">apply coupon</button>
               </div>
            </div>
            <div className="cart__order-summary">
               <ul className="cart__lists">
                  <li className="cart__list cart__list--1">Cart total</li>
                  <li className="cart__list cart__list--2">
                     <span>Subtotal</span>
                     <span>$4000</span>
                  </li>
                  <li className="cart__list cart__list--3">
                     <span>Shipping</span>
                     <span>Enter your address for easy and quick shipping.</span>
                     <div className="cart__shipping-options">
                        <div className="cart__select-box">
                           <select className="cart__select" name="country" id="country">
                              <option value="">Select a country</option>
                              <option value="nigeria">Nigeria</option>
                              <option value="ghana">Ghana</option>
                              <option value="egypt">Egypt</option>
                           </select>
                        </div>

                        <div className="cart__select-box">
                           <select class="cart__select" name="states" id="states">
                              <option value="">SELECT A STATE</option>
                              <option value="abia">Abia</option>
                              <option value="adamawa">Adamawa</option>
                              <option value="akwa ibom">Akwa Ibom</option>
                              <option value="anambra">Anambra</option>
                              <option value="bauchi">Bauchi</option>
                              <option value="bayelsa">Bayelsa</option>
                              <option value="benue">Benue</option>
                              <option value="borno">Borno</option>
                              <option value="cross river">Cross River</option>
                              <option value="delta">Delta</option>
                              <option value="ebonyi">Ebonyi</option>
                              <option value="edo">Edo</option>
                              <option value="ekiti">Ekiti</option>
                              <option value="enugu">Enugu</option>
                              <option value="gombe">Gombe</option>
                              <option value="imo">Imo</option>
                              <option value="jigawa">Jigawa</option>
                              <option value="kaduna">Kaduna</option>
                              <option value="kano">Kano</option>
                              <option value="katsina">Katsina</option>
                              <option value="kebbi">Kebbi</option>
                              <option value="kogi">Kogi</option>
                              <option value="kwara">Kwara</option>
                              <option value="lagos">Lagos</option>
                              <option value="nasarawa">Nasarawa</option>
                              <option value="niger">Niger</option>
                              <option value="ogun">Ogun</option>
                              <option value="ondo">Ondo</option>
                              <option value="osun">Osun</option>
                              <option value="oyo">Oyo</option>
                              <option value="plateau">Plateau</option>
                              <option value="rivers">Rivers</option>
                              <option value="sokoto">Sokoto</option>
                              <option value="taraba">Taraba</option>
                              <option value="yobe">Yobe</option>
                              <option value="zamfara">Zamfara</option>
                              <option value="federal capital">Federal Capital</option>
                           </select>
                        </div>

                        <div className="cart__select-box">
                           <select className="cart__select" name="country" id="country">
                              <option value="">Town / City</option>
                              <option value="nigeria">Ondo city</option>
                              <option value="ghana">Akure city</option>
                              <option value="egypt">Lagos city</option>
                           </select>
                        </div>

                        <button className="cart__coupon-btn cart__coupon-btn--update">
                           UPDATE
                        </button>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Cart;
