import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData, checkName } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";
import { bgURL } from "../utils/constant";

const Login = () => {

    //all hooks should defined on top;
    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);
    
    const [signupClicked, setSignupClicked] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const toggleSignin = () => {
        setSignupClicked(!signupClicked);
    };

    const handleBtnClick = (e) => {
        e.preventDefault();

       //validate form data  
       const message = checkValidData(email.current.value, password.current.value)//, fullname.current.value, signupClicked);
       setErrorMessage(message);
       if(message) return;   
         
        if(!signupClicked){
            //*********signin logic***********
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            ).then((userCredential) => {
                // Sign in successsful
                const user = userCredential.user;
                console.log(user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ " - " + errorMessage);
            });
        } 
        else {
            //*****************signup logic*************
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            ).then((userCredential) => {
                    // Sign up successful
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullname.current.value, photoURL: USER_AVATAR
                      }).then(() => {
                        // Profile updated!
                        // ...
                        const {uid, email, displayName, photoURL} = auth.currentUser; //get user details after user signs in
                        dispatch(
                            addUser({
                                uid: uid, 
                                email: email, 
                                displayName: displayName, 
                                photoURL: photoURL
                            })
                        );
                        console.log(user);
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+ " - " + errorMessage);
                });
            }

    }

    const handleCheckBox = () => {

    }

    return(
        // <div className="h-screen">
        <div className="relative h-screen overflow-hidden">
           <div className="absolute">
                <img 
                    src={bgURL} 
                    alt=""
                    // style={{ width: "100vw", height: "auto" }}
                    className="w-full h-full object-cover" 
                /> 
            </div>

            <Header/> 

            {/* <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 text-white"> */}
            <form className="absolute p-12 bg-black w-2/12 md:w-3/12 my-36 mx-auto bg-opacity-80 text-white right-0 left-0"> {/* Adjusted width */}

                <h3 className= "font-semibold text-2xl">
                    {signupClicked ? "Sign up" : "Sign In"}
                </h3>

                {signupClicked && <input 
                    type="text" 
                    ref={fullname}
                    placeholder="Full Name" 
                    className="w-full p-2 mt-4 bg-gray-700"
                />}
                

                <input 
                    type="text" 
                    ref={email}
                    placeholder="Email Address" 
                    className="w-full p-2 mt-4 bg-gray-700"
                />
                <br />
                
                <input 
                    type="text" 
                    ref={password}
                    placeholder="Password" 
                    className="w-full p-2 mt-4 bg-gray-700"
                />
                <br />

                {errorMessage && <p className="text-red-500 pt-2">{errorMessage}</p>}
                
                <button 
                    type="submit" 
                    className="p-3 mt-6 bg-red-700 w-full"
                    onClick={handleBtnClick}
                    >
                    {signupClicked ? "Sign up" : "Sign In"}
                </button>
                <br />
                
                <input 
                    type="checkbox" 
                    value="Remember Me" 
                    className="accent-gray-300 pl-px-2 mt-2 size-3" 
                    onChange={handleCheckBox}
                    checked 
                />
                
                <span className="text-gray-400 text-left text-xs px-1">Remember me</span>
                
                <span className="text-gray-400 text-right text-xs px-11">Need help?</span>
                <br />
                
                 <p className="text-gray-400 text-xs pt-10 cursor-pointer">
                 {signupClicked ? "Already a user? " : "New to Netflix? "}
                    <span className="text-white text-xs" onClick={toggleSignin}> {signupClicked ? "Sign In" : "Sign up now"} </span>
                </p>
                
                <p className="text-gray-400 text-xs pt-4 pb-7">
                    This page is protected by Google reCAPTCH to ensure you're not a bot. 
                    <span className="text-blue-700 text-xs">  Learn more.</span></p>
            </form>
            
        </div>
    );
};

export default Login;