//form validate logic

export const checkValidData = (email, password) => {//}, fullname, signupClicked) => {
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid = /^[A-Za-z]+([\ A-Za-z]+)*/.test(fullname);


    // if(signupClicked){
    //     if(!isNameValid) return "Enter a valid name";
    // }
    if(!isEmailValid) return "Email not Valid";
    if(!isPasswordValid) return "Password not Valid";
    
    return null;
};

