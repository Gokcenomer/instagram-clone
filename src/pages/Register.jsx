import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className=" flex flex-col items-center gap-4 justify-center">
      <div className="border-2 p-4 w-[500px] flex-1 space-y-10 mt-12 justify-center items-center">
        <h1 className="font-bold text-5xl text-center mt-8">Instagram</h1>
        <div className="flex justify-center">
          <h2
            className="w-4/5  text-gray-600
          "
          >
            Sign up to see photos and videos from your friends.
          </h2>
        </div>
        <div className="flex items-center flex-col gap-2">
          <a className="text-blue-700 font-bold" href="/">
            Log in with Facebook
          </a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-1/3 h-[1px] bg-gray-400 "></div>
          <span>Or</span>
          <div className="w-1/3 h-[1px] bg-gray-400"> </div>
        </div>
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-gray-200 w-4/5 p-2 border-2 border-gray-300 focus:ring-0  focus:outline-none"
            placeholder="Full Name"
            type="text"
          />
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-200 w-4/5 p-2 border-2 border-gray-300 focus:ring-0  focus:outline-none"
            placeholder="Username"
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
          <h3 className="w-4/5 text-gray-600 font-light text-sm">
            People who use our service may have uploaded your contact
            information to Instagram.
            <Link className="text-blue-700" to={"#"}>
              Learn More
            </Link>
          </h3>
          <h3 className="w-4/5 text-gray-600 font-light text-sm">
            By signing up, you agree to our
            <Link className="text-blue-700" to={"#"}>
              Terms
            </Link>
            ,
            <Link className="text-blue-700" to={"#"}>
              Privacy Policy
            </Link>
            and
            <Link className="text-blue-700" to={"#"}>
              Cookies Policy
            </Link>
            .
          </h3>
          <button
            onClick={onSubmit}
            className="bg-blue-400 w-4/5 mt-2 text-white font-semibold rounded p-2"
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="w-[500px] ">
        <p className="border-[1px] text-center p-4 py-6">
          Have an account?
          <Link to={"/login"} className="text-blue-700">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
