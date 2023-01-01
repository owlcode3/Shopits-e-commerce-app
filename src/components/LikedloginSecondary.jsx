import { Link } from "react-router-dom";

function LikedloginSecondary() {
   return (
      <div className="liked-login liked-login--secondary">
         <Link className="liked-login__link liked-login__link--secondary" to="/">
            <span className="liked-login__text">LIKED</span>
         </Link>
         <Link className="liked-login__link liked-login__link--secondary" to="/login">
            <span className="liked-login__text">LOGIN</span>
         </Link>
      </div>
   );
}

export default LikedloginSecondary;
