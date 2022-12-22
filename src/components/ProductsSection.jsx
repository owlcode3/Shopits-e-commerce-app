import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { GiWorriedEyes } from "react-icons/gi";
import { BiHeart } from "react-icons/bi";
// import { useGetClothesQuery  } from "../redux/services/productsApi";
import { useGetClothesQuery } from "../../src/redux/services/productsApi";
function ProductsSection({ setIsFilterOpen }) {
   const [products, setProducts] = useState([]);
   const { data, isFetching, error } = useGetClothesQuery();

   useEffect(() => {
      if (data) {
         setProducts(data.products);
      }
   }, [data]);

   return (
      <section className="product">
         <ul className="product__sort">
            <li
               onClick={() => setIsFilterOpen(true)}
               className="product__filter product__filter--1"
            >
               <span>
                  <svg
                     className="product__filter-icon"
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <line x1="4" y1="21" x2="4" y2="14"></line>
                     <line x1="4" y1="10" x2="4" y2="3"></line>
                     <line x1="12" y1="21" x2="12" y2="12"></line>
                     <line x1="12" y1="8" x2="12" y2="3"></line>
                     <line x1="20" y1="21" x2="20" y2="16"></line>
                     <line x1="20" y1="12" x2="20" y2="3"></line>
                     <line x1="1" y1="14" x2="7" y2="14"></line>
                     <line x1="9" y1="8" x2="15" y2="8"></line>
                     <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
               </span>
               <span className="product__filter-text">Filters</span>
            </li>

            <li className="product__filter product__filter--2">
               <form className="product__form" action="/">
                  <select className="product__select" name="cars" id="cars">
                     <option className="product__option" value="volvo">
                        Default sorting
                     </option>
                     <option className="product__option" value="saab">
                        Sort by popularity
                     </option>
                     <option className="product__option" value="opel">
                        Sort by average rating
                     </option>
                     <option className="product__option" value="audi">
                        Sort by price: low to high
                     </option>
                     <option className="product__option" value="audi">
                        Sort by price: hight to low
                     </option>
                  </select>
                  <input className="product__submit" type="submit" value="Submit" />
               </form>
               <span>
                  <RiArrowDownSLine display={"block"} size={20} />
               </span>
            </li>
         </ul>
         <ul className="product__lists">
            {error ? <h3>error fetching data...</h3> : ""}
            {products.map(product => {
               return (
                  <li key={product.id} className="product__list">
                     <div className="product__box product__box--image">
                        <img className="product__image" src={product.image} alt="product" />
                        <div className="product__reveal">
                           <a className="product__link" href="#">
                              <GiWorriedEyes size={30} />
                           </a>
                           <a className="product__link" href="#">
                              <BiHeart size={25} />
                           </a>
                        </div>
                     </div>
                     <div className="product__detail">
                        <div className="product__box">
                           <h2 className="product__name">{product.name}</h2>
                        </div>
                        <div className="product__box">
                           <svg className="product__icon" role="presentation" viewBox="0 0 19 23">
                              <path
                                 d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z"
                                 fill="currentColor"
                              ></path>
                           </svg>
                        </div>
                        <div className="product__box">
                           <span className="product__price">₦ {product.price}</span>
                        </div>
                     </div>
                  </li>
               );
            })}
         </ul>
      </section>
   );
}

export default ProductsSection;
