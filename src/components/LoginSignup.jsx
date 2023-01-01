import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginSignup() {
   const [bgColor1, setBgColor1] = useState(true);
   const [bgColor2, setBgColor2] = useState(false);

   const bgc1 = () => {
      setBgColor1(true);
      setBgColor2(false);
   };

   const bgc2 = () => {
      setBgColor2(true);
      setBgColor1(false);
   };

   return (
      <div className="signup">
         <div className="signup__box">
            <div className="signup__header">
               <span onClick={bgc1} style={{ backgroundColor: bgColor1 ? "#00000099" : "" }}>
                  Log in
               </span>{" "}
               <span onClick={bgc2} style={{ backgroundColor: bgColor2 ? "#00000099" : "" }}>
                  Sign up
               </span>
            </div>
            <div className="signup__form-body">
               {bgColor1 && <LoginForm />}
               {bgColor2 && <SignupForm />}
            </div>
         </div>
      </div>
   );
}

export default LoginSignup;
