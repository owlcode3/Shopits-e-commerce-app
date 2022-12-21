function Input({ windowWidth }) {
   return (
      <div className="input">
         <div className="input__box">
            <div className="input__icon-box">
               {windowWidth > 600 ? (
                  <svg className="input__icon" role="presentation" viewBox="0 0 21 21">
                     <g
                        transform="translate(1 1)"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="square"
                     >
                        <path d="M18 18l-5.7096-5.7096"></path>
                        <circle cx="7.2" cy="7.2" r="7.2"></circle>
                     </g>
                  </svg>
               ) : (
                  <svg className="input__icon" role="presentation" viewBox="0 0 18 17">
                     <g
                        transform="translate(1 1)"
                        stroke="currentColor"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="square"
                     >
                        <path d="M16 16l-5.0752-5.0752"></path>
                        <circle cx="6.4" cy="6.4" r="6.4"></circle>
                     </g>
                  </svg>
               )}
            </div>

            <input
               type="search"
               name="search"
               className="input__search"
               id="search"
               placeholder="search..."
            />

            <div className="input__icon-box">
               <svg className="input__icon" role="presentation" viewBox="0 0 16 14">
                  <path
                     d="M15 0L1 14m14 0L1 0"
                     stroke="currentColor"
                     fill="none"
                     fillRule="evenodd"
                  ></path>
               </svg>
            </div>
         </div>
      </div>
   );
}

export default Input;
