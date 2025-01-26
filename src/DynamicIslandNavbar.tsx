import React, { useEffect } from "react";
import gsap from "gsap";
import "./DynamicIslandNavbar.css";

const DynamicIslandNavbar: React.FC = () => {
  useEffect(() => {
    const navbarIcon = document.querySelector(".din-navbar-icon");
    const Menu = gsap.timeline({ paused: true });
    let isMenuOpen = false;

    Menu.to(".din-link-item", { opacity: 0, duration: 0.2, stagger: -0.1 });
    Menu.to(".din-links-container", { maxWidth: "0%", padding: 0, gap: 0, duration: 1 });
    Menu.to(".din-dynamic-island-container", { width: 200, height: 40, duration: 0.5 }, "-=1");

    const toggleMenu = () => {
      if (isMenuOpen) {
        Menu.reverse();
      } else {
        Menu.play();
      }
      isMenuOpen = !isMenuOpen;
    };

    navbarIcon?.addEventListener("click", toggleMenu);

    return () => {
      navbarIcon?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className="din-dynamic-island-container">
      <div className="logo">
        <img
          src="https://njwebdesigning.in/wp-content/uploads/2021/05/youtube-logo-white.svg"
          alt="Logo"
          width="50px"
          height="50px"
        />
      </div>
      <div className="din-links-container">
        <p className="din-link-item">Home</p>
        <p className="din-link-item">About</p>
        <p className="din-link-item">Works</p>
        <p className="din-link-item">Contact</p>
        <p className="din-link-item">Blogs</p>
      </div>
      <div className="din-navbar-icon">
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default DynamicIslandNavbar;
