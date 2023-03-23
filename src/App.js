import './App.css';
import Profile from "./Profile/Profile";
import profileImage from "./Profile/images/hijabi.jpg";

function App() {
  const handleName = (fullName) => {
    alert(`Hello my Name is ${fullName}`);
  };

  return (
    <div
    >
      <Profile
        fullName="Fatima Zahra Faryat"
        bio="I'm a passionate front-end developer with 2 years of experience in the industry. I specialize in creating dynamic and visually appealing user interfaces using a variety of technologies such as HTML, CSS, JavaScript, and React.
        My mission as a developer is to create seamless user experiences that are both functional and aesthetically pleasing. I take pride in my attention to detail, ensuring that every pixel on the screen is in its rightful place. I'm constantly keeping up with the latest trends and best practices in web development to deliver the best results for my clients."
        profession="Web Developer"
        handleName={handleName}
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Profile>
    </div>
  );
}

export default App;