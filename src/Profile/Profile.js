import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div
     style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"red",
        minHeight: "100vh",
        borderRadius: "10%",
      }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "50rem",
          height: "10%",
          position: "relative",
          borderRadius: "20px",
        }}
      >
        {children}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "#fff",
            paddingLeft: "0.7rem",
          }}
        >
          <h2 className="gradient_text">{fullName}</h2>
          <p>
            Bio : <br /> <br /> {bio}
          </p>
          <p>
            Profession : <br /> <br />
            {profession}
          </p>

          <button
            onClick={() => handleName(fullName)}
            style={{
              borderRadius: "15px",
              width: "6rem",
              padding: "0.4rem",
            }}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Fatima Zahra Faryat",
  bio: "No bio available",
  profession: "Unknown profession",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;


