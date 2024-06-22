import React from 'react'

const LifeTrack = () => {
            const handleButtonClick = () => {
    window.open("https://sg.rd-tech.org/", "_blank");
  };

  return (
    <>
      <div className="app-container life-track ">
        <h1 className="m-5">Welcome to My Project</h1>
        <button onClick={handleButtonClick}>Explore Our AI Project</button>
      </div>
      <style>
        {`
      body {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
        transition: background-color 0.3s;
        
        color: ; /* Text color dark */
      }

      .app-container {
        background: linear-gradient(to  right, #527593, #2e4b69); /* Dark background for containers */
        color: #eee; /* Light text color */
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 20px; /* Added padding to the container */
      }

      .home-page, .life-track {
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
        .life-track{
        text-align: center;
        padding: 50px 0;
        }
         .life-track h1 {
        font-size: 36px;
        margin-bottom: 20px;
      }
        .life-track button {
        padding: 10px 20px;
        font-size: 18px;
        background-color: #007bff;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;
      }

       .life-track button:hover {
        background-color: #0056b3;
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
    </>
  );
      
}

export default LifeTrack