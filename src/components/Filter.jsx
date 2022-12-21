import useOnclickOutside from "react-cool-onclickoutside";

function Filter({ setIsFilterOpen }) {
   const ref = useOnclickOutside(() => {
      setIsFilterOpen(false);
   });

   return (
      <div ref={ref} className="filter">
         <div className="filter__box-1">
            <span>Filter</span>{" "}
            <span onClick={() => setIsFilterOpen(false)} className="filter__close">
               close
            </span>
         </div>
         <div className="filter__box-2">
            <div className="filter__active filter__active--1">
               <span className="filter__heading">Active Filters</span>
               <ul className="filter__lists filter__lists--1">
                  <li className="filter__list">Dresses</li>
                  <li className="filter__list">s</li>
                  <li className="filter__list">xxl</li>
                  <li className="filter__list">Shoes</li>
               </ul>
            </div>

            <div className="filter__active filter__active--2">
               <span className="filter__heading">Filter by category</span>
               <ul className="filter__lists filter__lists--2">
                  <li className="filter__list">Dresses</li>
                  <li className="filter__list">Watches</li>
                  <li className="filter__list">Make up</li>
                  <li className="filter__list">Shoes</li>
               </ul>
            </div>

            <div className="filter__active filter__active--3">
               <span className="filter__heading">Filter by size</span>
               <ul className="filter__lists filter__lists--3">
                  <li className="filter__list">XL</li>
                  <li className="filter__list">XXL</li>
                  <li className="filter__list">XXXL</li>
                  <li className="filter__list">XS</li>
                  <li className="filter__list">M</li>
                  <li className="filter__list">L</li>
               </ul>
            </div>

            <div className="filter__active filter__active--3">
               <span className="filter__heading">Filter by color</span>
               <ul className="filter__lists filter__lists--4">
                  <li className="filter__list filter__list--color"></li>
                  <li className="filter__list filter__list--color"></li>
                  <li className="filter__list filter__list--color"></li>
                  <li className="filter__list filter__list--color"></li>
                  <li className="filter__list filter__list--color"></li>
                  <li className="filter__list filter__list--color"></li>
                  <li className="filter__list filter__list--color"></li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Filter;
