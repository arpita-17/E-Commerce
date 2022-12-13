export const Signup=(data)=>{
    return{
        type:"SIGNUP",
        payload:data
    }
}

export const Login =(data)=>{
    return{
        type:"LOGIN",
        payload:data
    }
}

export const Logout=()=>{
    return{
        type:"LOGOUT"
    }
}