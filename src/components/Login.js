import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [signupClicked, setSignupClicked] = useState(false);


    const toggleSignin = () => {
        setSignupClicked(!signupClicked);
    }


    return(
        <div >
           
           <div className="absolute w-full">
                <img 
                    src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" 
                    alt=""
                    style={{ width: "100vw", height: "auto" }}
                /> 
            </div>

            <Header/> 

            <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 text-white">

                <h3 className= "font-semibold text-2xl">
                    {signupClicked ? "Sign up" : "Sign In"}
                </h3>

                {signupClicked && <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full p-2 mt-4 bg-gray-700"
                />}
                

                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="w-full p-2 mt-4 bg-gray-700"
                />
                <br />
                
                <input 
                    type="text" 
                    placeholder="Password" 
                    className="w-full p-2 mt-4 bg-gray-700"
                />
                <br />
                
                <button 
                    type="submit" 
                    className="p-3 mt-6 bg-red-700 w-full"
                    >
                    {signupClicked ? "Sign up" : "Sign In"}
                </button>
                <br />
                
                <input 
                    type="checkbox" 
                    value="Remember Me" 
                    className="accent-gray-300 pl-px-2 mt-2 size-3" 
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