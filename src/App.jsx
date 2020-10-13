import React from "react";
import Router from "./Router";
import { useSelector } from "react-redux";
import "./assets/reset.css";
import "./assets/style.css";
import Header from "./Component/Header/Header";
import { getIsSignedIn } from "./redux/Users/selector";
import Footer from "./Component/Footer/Footer";

const App = () => {
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  return (
    <>
      {isSignedIn && <Header />}
      <main>
        <Router />
      </main>
      {isSignedIn && <Footer />}
    </>
  );
};
export default App;
