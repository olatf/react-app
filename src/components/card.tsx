

import profilePic from "../assets/profile.jpg";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="Profile pics" className="card-img" />
      <h2 className="card-title">Adebowale</h2>
      <p className="card-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nisi
        similique corporis!
      </p>
    </div>
  );
}

export default Card;
