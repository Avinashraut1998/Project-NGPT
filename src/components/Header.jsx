import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  let navigate = useNavigate();
  const user = useSelector((store) => store.user);

  let handleSignOutbtn = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  return (
    <div>
      <div className="absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix-Logo"
        />
        {user && (
          <div className="flex p-2">
            <img
              className="h-10 w-10 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU"
              alt="Profile-Icon"
            />
            <button onClick={handleSignOutbtn} className="font-bold text-white">
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
