import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

function Week1() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/data/teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <section id="blog" className="main_blog">
      <div className="head_title">
        <h2>공연팀</h2>
        <div className="subtitle">공연팀 소개 입니다.</div>
        <div className="separator"></div>
      </div>

      <div className="team-card-container">
        {Array.from({ length: Math.ceil(teams.length / 2) }).map((_, rowIdx) => (
          <div className="team-card-row" key={rowIdx}>
            {teams.slice(rowIdx * 2, rowIdx * 2 + 2).map((team, idx) => (
              <TeamCard key={idx} {...team} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Week1;