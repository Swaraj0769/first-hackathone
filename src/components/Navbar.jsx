import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const windowNavBar = () => {
    return (
      <>
        <div className="w-[70vw] bg-zinc-300 rounded-lg m-3 p-3 z-990 absolute ml-50 justify-between flex items-center">
          <div className="flex gap-2 flex-col justify-between w-70">
            <div className="flex gap-2 items-center justify-center w-20">
              <a href="https://www.instagram.com/viarosaitaly/?hl=en">
                <img
                  src="https://img.icons8.com/?size=100&id=ZRiAFreol5mE&format=png&color=000000"
                  alt=""
                />
              </a>
              <a href="https://www.facebook.com/viarosaitaly/">
                <img
                  src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000"
                  alt=""
                />
              </a>
            </div>
            <div className="flex gap-2 items-center justify-between w-70">
              <NavLink to="/product">Product</NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
          </div>
          <div>
            {" "}
            <img
              className="h-6"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gCt_gTM9o8wLYX9uTFg15qyDtZo3z5MIoA&s"
              alt=""
            />{" "}
          </div>
          <div className="flex gap-2 flex-col justify-between w-70">
            <div className="flex gap-2 items-center justify-end w-70">
              <a className="w-10" href="https://www.linkedin.com/in/swarajsanodiya/">
                <img
                  src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                  alt=""
                />
              </a>
              <a className="w-10" href="https://wa.me/919755114034?text=Hello%2C%20this%20is%20Swaraj">
                <img
                  src="https://img.icons8.com/?size=100&id=964RahB4l606&format=png&color=000000"
                  alt=""
                />
              </a>
            </div>
            <div className="flex gap-2 items-center justify-between w-70">
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/sign-in">Sign In</NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };

  const mobileNavBar = () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-full p-3 flex z-990 absolute  gap-2">
          
        <div className="flex items-center justify-between w-full">
          <img
            className="h-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gCt_gTM9o8wLYX9uTFg15qyDtZo3z5MIoA&s"
            alt=""
          />
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>
        <nav style={{ display: open ? "block" : "none" } }>
          <ul className="flex flex-col z-999 border-2 w-full rounded-lg p-3 hover:bg-amber-800 border-black right-0 bg-amber-50 absolute gap-2">
            <li className="flex items-center justify-between pr-3">
              <a href="/">Home</a>
              <button onClick={() => setOpen(!open)}>X</button>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/sign-in">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  return(
    <>
    <div>
      {window.innerWidth > 768 ? windowNavBar() : mobileNavBar()}
    </div>
    </>
  )
};

export default Navbar;
