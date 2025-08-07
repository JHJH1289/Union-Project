import React, { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton"; // 로그아웃 버튼 임포트

function TopMenuBarLogin({ isLoggedIn, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">UNION</div>
      <ul className="navbar-links">
        {isLoggedIn && (
          <li>
            <LogoutButton onLogout={onLogout} />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default TopMenuBarLogin;
