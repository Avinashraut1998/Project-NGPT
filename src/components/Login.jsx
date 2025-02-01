import { useState } from "react";
import Header from "./Header";

const Login = () => {
  let [isSignInForm, setIsSignInForm] = useState(true);

  let toggleSign = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
          alt=""
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black/80  my-36 mx-auto right-0 left-0 text-white rounded-lg ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-600"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 my-2 cursor-pointer" onClick={toggleSign}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Aready regestred. Please Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
