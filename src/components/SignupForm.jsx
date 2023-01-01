import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";

function SignupForm() {
   return (
      <form className="signup__form" action="">
         <div className="signup__input-box">
            <input className="signup__input" type="text" placeholder="Email address" name="email" />
            <input
               className="signup__input"
               type="password"
               placeholder="Password"
               maxLength={10}
               minLength={5}
               name="psw"
            />
         </div>

         <div className="signup__submit-box signup__submit-box--sp">
            <button className="signup__submit" type="submit">
               Sign up
            </button>
         </div>

         <div className="signup__alternatives">
            <div className="signup__length-box">
               <span className="signup__length"></span>
               <span>or</span>
               <span className="signup__length"></span>
            </div>
            <ul className="signup__lists">
               <li className="signup__list signup__list--1">
                  <GrTwitter size={20} color="#eee" />
               </li>
               <li className="signup__list signup__list--2">
                  <FaFacebookF size={20} color="#eee" />
               </li>
               <li className="signup__list signup__list--3">
                  <BsGoogle size={20} color="#eee" />
               </li>
            </ul>
         </div>
      </form>
   );
}

export default SignupForm;
