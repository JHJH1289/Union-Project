import React, { useEffect, useState } from 'react';

function TopMenuBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">UNION</div>
      <ul className="navbar-links">
        <li><a href="/member/login">로그인</a></li>
        <li><a href="/member/save">회원가입</a></li>
      </ul>
    </nav>
  );
}

export default TopMenuBar;
