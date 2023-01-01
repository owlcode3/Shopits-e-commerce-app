import { Link } from "react-router-dom";

function LikedloginPrimary() {
   return (
      <div className="liked-login">
         <Link className="liked-login__link" to="/">
            <span className="liked-login__text">LIKED</span>
         </Link>
         <Link className="liked-login__link" to="/login">
            <span className="liked-login__text">LOGIN</span>
         </Link>
      </div>
   );
}

export default LikedloginPrimary;
