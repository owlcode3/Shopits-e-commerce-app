function NewsLetter() {
   return (
      <section className="newsletter">
         <div className="newsletter__box">
            <div className="newsletter__texts">
               <h1 className="newsletter__heading-1">join the club!</h1>
               <p className="newsletter__paragraph">receive exclusive deals on new styles</p>
               <h2 className="newsletter__heading-2">Get 15% off your next purchase</h2>
            </div>

            <form className="newsletter__form">
               <label htmlFor="newsletter-email" className="newsletter__label">
                  email
               </label>
               <div className="newsletter__input-box">
                  <input
                     type="text"
                     id="newsletter-email"
                     className="newsletter__input"
                     placeholder="EMAIL"
                  />
                  <button type="submit" className="newsletter__submit">
                     subscribe
                  </button>
               </div>
            </form>
         </div>
      </section>
   );
}

export default NewsLetter;
