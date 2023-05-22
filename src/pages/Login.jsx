import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";

const credentialContext = createContext(null);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className=" flex flex-col items-center gap-4 ">
      <div className="border-2 p-4 w-[500px] flex-1 space-y-20 mt-12 justify-center items-">
        <h1 className="font-bold text-5xl text-center mt-8">Instagram</h1>
        <form action="/" className="flex flex-col items-center gap-2">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 w-4/5 p-2 border-2 border-gray-300 focus:ring-0  focus:outline-none"
            placeholder="Email"
            type="text"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 w-4/5 p-2 border-2 border-gray-300 focus:outline-none focus:ring-0   "
            placeholder="Password"
            type="password"
          />
          <button
            onClick={onSubmit}
            className="bg-blue-400 w-4/5 mt-2 text-white font-semibold rounded p-2"
          >
            Log in
          </button>
        </form>
        <div className="flex justify-center items-center gap-4">
          <div className="w-1/3 h-[1px] bg-gray-400 "></div>
          <span>Or</span>
          <div className="w-1/3 h-[1px] bg-gray-400"> </div>
        </div>
        <div className="flex items-center flex-col gap-8">
          <a className="text-blue-700 font-bold" href="/">
            Log in with Facebook
          </a>
          <p>Forgot password?</p>
        </div>
      </div>
      <div className="w-[500px] ">
        <p className="border-[1px] text-center p-4 py-6">
          Don't have an account?
          <Link className="text-blue-700" to={"/register"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
