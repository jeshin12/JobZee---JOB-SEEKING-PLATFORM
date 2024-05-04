import React, { useContext } from "react";
import { Context } from "../../main";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {

  const {  user } = useContext(Context);
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  const headingStyle = {
     color: '#2d5649' // Example color
    // Example font size
    // Add more styles as needed
  }
  const headingStyle2 = {
    color: 'pink' // Example color
   // Example font size
   // Add more styles as needed
 }
  return (
    <>
      <div className="heroSection">
        <div className="container">
          <div className="title">
          {user && user.role === "Employer" ? (
            <>
              <h1 style={headingStyle}>Post a job </h1>
            <h1>To find a skilled employer to your team</h1>
              
            </>
          ) : (
            <>
              <h1 style={headingStyle2}>Find a job that suits</h1>
            <h1>your interests and skills</h1>
            </>
          )}
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptate repellat modi quidem aliquid eaque ducimus ipsa et,
              facere mollitia!
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;