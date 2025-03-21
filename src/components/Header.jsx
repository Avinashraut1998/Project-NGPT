import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, profileAvatar } from "../utils/constants";

const Header = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const user = useSelector((store) => store.user);

  let handleSignOutbtn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={LOGO} alt="Netflix-Logo" />
        {user && (
          <div className="flex p-2">
            <img
              className="h-10 w-10 "
              src={profileAvatar}
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
