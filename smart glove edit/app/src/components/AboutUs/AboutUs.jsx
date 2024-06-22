import React, { useState } from 'react';

const project = {
  name: "Talking Hand",
  description:
    "A project focusing on innovative glove-based speaker technology.",
  specializations: [
    {
      name: "Mobile",
      description: "ENG: Saga Maher Said Contact: +201004048807",
      icon: "fa fa-mobile-alt",
    },
    {
      name: "Backend",
      description: "ENG: Marina Abdallah Noshy Contact: +201228847398",
      icon: "fa fa-server",
    },
    {
      name: "Embedded System",
      description: "ENG: Galal Salah Abdelhaleem Contact: +201113051071",
      icon: "fa fa-microchip",
    },
    {
      name: "Web",
      description:
        "Eng: Martina Besher Mousa Contact: +20128175103 & ENG: Sama Yasser Abdel El Nabi Contact: + 201110107099",
      icon: "fa fa-globe",
    },
    {
      name: "AI",
      description:
        "Eng: Ahmed Yasser Ahmed Saeed Contact: +201033774698 & Eng: Yasmeen Mohamed Atia Contact:+201098471912 & Eng: Farah Anwar Sadiq Contact: +201070182784 & Eng: Mohammed Mahmoud Sayed Aboalwafa Contact: +201146671014",
      icon: "fa fa-robot",
    },
  ],
};

const AboutUs = ({ project }) => {
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  const handleClick = (index) => {
    setSelectedSpecialization(index);
  };

  const handleClose = () => {
    setSelectedSpecialization(null);
  };

  const specialization = project.specializations[selectedSpecialization];

  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="project-info">
        <h3>{project.name}</h3>
        <div className="specializations">
          <div className="row">
            {project.specializations.map((specialization, index) => (
              <div key={index} className="specialization" onClick={() => handleClick(index)}>
                <i className={`icon ${specialization.icon}`}></i>
                <h4>{specialization.name}</h4>
              </div>
            ))}
          </div>
          {selectedSpecialization !== null && (
            <div className="description-column">
              <div className="detail" onClick={(e) => e.stopPropagation()}>
                <p className="detail-text">{specialization.description}</p>
                <span className="close" onClick={handleClose}>x</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [page, setPage] = useState("home");

  const handlePageChange = () => {
    setPage(page === "home" ? "detail" : "home");
  };

  return (
    <div>
      {page === "home" ? <HomePage setPage={handlePageChange} /> : <AboutUs project={project} />}
    </div>
  );
};

const HomePage = ({ setPage }) => (
  <div className="home-page">
    <h1>Welcome to Talking Hand</h1>
    <button onClick={setPage}>Explore</button>
  </div>
);

const AppWithStyles = () => (
  <div className="app-container">
    <App />
    <style>
      {`
      body {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
        transition: background-color 0.3s;
     
      }

      .app-container {
        background: linear-gradient(to  right, #527593, #2e4b69); /* Dark background for containers */
        color: #eee; /* Light text color */
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 20px; /* Added padding to the container */
      }

      .home-page {
        text-align: center;
      }

      .home-page h1 {
        font-size: 36px;
        margin-bottom: 20px;
      }

      .home-page button {
        padding: 10px 20px;
        font-size: 18px;
        background-color: #007bff;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .home-page button:hover {
        background-color: #0056b3;
      }
      
      .about-us {
        text-align: center;
        padding: 50px 0;
      }

      .project-info {
        max-width: 800px;
        margin: 0 auto;
        border-radius: 10px;
        padding:20px;
        animation: fadeIn 0.5s ease;
        background-color: ; /* Dark background for project info */
       /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);*/
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .project-info h3 {
        font-size: 40px;
        color: #ffcc00;
        
        margin-bottom: 20px;
      }

      .project-info p {
        font-size: 22px;
        color: ; /* Light text color for project description */
        line-height: 1.6;
      }

      .specializations {
        margin-top: 40px;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 20px;
      }

      .specialization {
        flex: 0 0 calc(33.33% - 20px);
        margin: 10px;
        padding: 50px;
        background-color:#2e4b69;
       /* Dark background for specialization */
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .specialization:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      }

      .icon {
        font-size: 48px;
        color: #ffcc00; /* Light color for icons */
        margin-bottom: 20px;
      }

      .specialization h4 {
        font-size: 24px;
        color: #fff; /* Light color for text */
        margin-bottom: 10px;
      }

      .description-column {
        flex: 1;
      }

      .detail {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        z-index: 1000;
        overflow-y: auto;
      }

      .detail p {
        font-size: 25px;
        padding: 20px;
        width: 50%;
        margin: auto 50px;
        opacity: 0; /* جعلت النص شفافًا في البداية */
        animation: slideInRight 2s ease forwards; /* استخدمت الانيميشن slideInRight */
      }
      
      @keyframes slideInRight {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      

      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        cursor: pointer;
        color: #fff;
      }

      .close:hover {
        color: #ffc107;
      }
    `}
    </style>
  </div>
);
export default AppWithStyles;