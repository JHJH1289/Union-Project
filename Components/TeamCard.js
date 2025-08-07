import React from "react";

function TeamCard({ name, image, description, link }) {
  return (
    <div className="team-card">
      {image && (
        <img className="team-card-image" src={image} alt={name} />
      )}
      <div className="team-card-text">
        <h1>{name}</h1>
        <div className="separator2"></div>
        <p>
          {description.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
          {link && (
            <>
              <br />
              <a href={link} className="team-card-link">
                {name} 인스타 바로가기
              </a>
            </>
          )}
        </p>
      </div>
      <br></br>
    </div>
  );
}

export default TeamCard;
