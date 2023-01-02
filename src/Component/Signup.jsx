import React, { useState } from "react";
import { ReactComponent as YourSvg } from "../image/mobile.svg";
import { useDispatch } from "react-redux";
import { Register } from "../action/Action";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateData = () => {
    if (!name) {
      toast.warning("Please Enter Valid Name !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!email) {
      toast.warning("Please Enter Valid Email!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (!password) {
      toast.warning("Please Enter Valid Password !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }else if(password.length < 6){
      toast.warning("Please Enter Password minimum 6 digit !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return false
    }
    if(name && email && password){
alert()
return true
    }

     return true;
  };

  const alert =()=>{
    swal({
      title: `${name} Your Registeration Succesfully`,
      text: "Please Login",
      icon: "success",
      button: "Ok"
    });
  }

  const SubmitForm = (e) => {
    e.preventDefault();

   

    if (validateData()) {
      dispatch(Register({ name, email, password }));
      navigate("/login");
    }
   
    
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24  flex flex-wrap items-center">
          <div className="md:pr-16 lg:w-1/2 md:w-1/2  lg:pr-0 pr-0  xl:w-1/3 lg:w-1/2 md:w-1/2">
            {/* md:pr-16 lg:w-1/2 md:w-1/2*/}
            <YourSvg />
          </div>

          <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <form action="" onSubmit={SubmitForm}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
