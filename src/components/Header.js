import { useDispatch, useSelector } from "react-redux";
// import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {useEffect} from 'react';
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleLogout = () => {

       signOut(auth)
            .then(() => {
                // Sign-out successful.
                // navigate("/");
            }).catch((error) => {
                // An error happened.
        });
        
    };

    useEffect(() => {
        // this api is called when the authentication state changes.
           const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                // User is signed in.
                const {uid, email, displayName, photoURL} = user; //get user details after user signs in
                dispatch(
                    addUser({
                        uid: uid, 
                        email: email, 
                        displayName: displayName, 
                        photoURL: photoURL
                    })
                ); //update the store with user info
                navigate("/browse");
                } else {
                // User is signed out
                dispatch(removeUser()); //logout user.
                navigate("/");
             }
            });

              //unsubscribe when component unmounts
              return () => unsubscribe();


        }, []);
    


    return(
        // <div className="relative">
            <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
                <img 
                    className="w-24"
                    src={LOGO}
                    alt="Logo"
                />

               {user && (
                    <div className="flex p-4 text-white">
                    <img
                        className="w-10 h-10"
                        // src={USER_AVATAR}
                        src={user.photoURL}
                        alt="User"
                    /> 
                    <button className="p-1" type="submit" onClick={handleLogout}>Sign out</button>
                    </div>
                )}
                
            </div>
        
            
        // </div>
    );
};

export default Header;