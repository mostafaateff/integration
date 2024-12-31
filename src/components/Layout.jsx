import React, { useState } from "react";
import SideNav from "./SideNav.jsx";
import Header from "./Header.jsx";
import "../App.css";
function Layout({ children }) {
  const [isOppen, setIsOppen] = useState(true);
  const fullURL = window.location.href;
  const pathWithoutLayout = ["login", "registration"];
  return (
    <>
      {pathWithoutLayout.includes(fullURL.split("/").at(-1)) ? (
        <main>{children}</main>
      ) : (
        <div className={`row  ${!isOppen ? "m-cloceNav" : null}`}>
          <div
            className={`
                        ${
                          isOppen
                            ? `${
                                window.matchMedia("(max-width: 500px)").matches
                                  ? "col-12"
                                  : window.matchMedia("(max-width: 700px)")
                                      .matches
                                  ? "col-4"
                                  : window.matchMedia("(max-width: 800px)")
                                      .matches
                                  ? "col-3"
                                  : "col-2"
                              }`
                            : "col-1"
                        }
                        bg-black  fixed-top`}
          >
            <SideNav isOppen={isOppen} setIsOppen={setIsOppen} />
          </div>
          <div
            className={`
                        ${
                          isOppen
                            ? `${
                                window.matchMedia("(max-width: 500px)").matches
                                  ? "d-none"
                                  : window.matchMedia("(max-width: 700px)")
                                      .matches
                                  ? "col-8 ml-33"
                                  : window.matchMedia("(max-width: 800px)")
                                      .matches
                                  ? "m-25 col-9"
                                  : "col-10 m-16"
                              }`
                            : "col-11"
                        } corictTheposition`}
          >
            <Header isOppen={isOppen} />
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
