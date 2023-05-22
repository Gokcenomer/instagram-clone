import Suggestions from "../components/Suggestions";
import Stories from "../components/Stories";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { redirect } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { createContext } from "react";

export const UserContext = createContext(null);
function HomePage() {
  const user = auth.currentUser;
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        // ...
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  {
    if (isAuth) {
      return (
        <div className="relative flex flex-col justify-center items-center gap-2 bg-[#121212]">
          <UserContext.Provider value={user}>
            <Suggestions />
            <Sidebar />
            <Stories />
            <Feed />
          </UserContext.Provider>
        </div>
      );
    } else {
      redirect("/login");
    }
  }
}

export default HomePage;
