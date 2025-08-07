import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TeamPresent from "./components/TeamPresent";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import ReservationForm from "./components/ReservationForm";
import TopMenuBar from "./components/TopMenuBar";
import TopMenuBarLogin from "./components/TopMenuBarLogin";
import HeaderLogin from "./components/HeaderLogin";
import ReservationLogin from "./components/ReservationLogin";

function MainPage({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="culmn">
      {isLoggedIn 
        ? <TopMenuBarLogin onLogout={() => setIsLoggedIn(false)} />
        : <TopMenuBar />
      }

      {isLoggedIn 
        ? <HeaderLogin />
        : <Header />
      }

      <TeamPresent />

      {isLoggedIn 
        ? <ReservationLogin />
        : <Reservation />
      }

      <Footer />
    </div>
  );
}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("/api/user/status");
        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(data);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Failed to fetch login status:", error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/reservation-form" element={<ReservationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
