import React, { useState } from "react";

const Popup = ({ details, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose} style={{color: 'red', fontSize: '3vh', fontWeight: 'bolder'}}>X</button>
        <h2>Details</h2>
        <div className="details-grid">
          {details.map((dayDetails, index) => (
            <div key={index} className="details-row">
              <p><strong>{index + 1}:</strong> {dayDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [popupDetails, setPopupDetails] = useState(null);

  const [detailsByWeek, setDetailsByWeek] = useState({
    "1:0": [
      
        "Registration and ice-breaking activities.",
        "Introduction to robot and its applications",
        "Building robots and hands on project experience"
      ],

      "1:1":[
        "Electronics and Components Introduction",
        "Sensor Technologies and Applications",
        "Hands on Electronics Experiment",
        "Sensor Scavenger Hunter Game",
        "Review and Discussions"
      ],
      "1:2":[
        "Introduction to Programming and Coding",
        "Hands on coding activities",
        "Robots Programming Language and Challenge",
        "Reviews and Discussions"
      ],
      "1:3":[
        "Introduction to AI & Machine Learning",
        "AI & ML Projects",
        "AI Programming Activities",
        "AI Mini Project and Showcase"
      ],
      "1:4":[
        "Final Robot Building and Testing",
        "Team Robot Challenge",
        "Robot Design Competitions",
        "Award Ceremony and Closing Remarks"
      ],
      // "2:0":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "2:1":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "2:2":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "2:3":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "2:4":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "3:0":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "3:1":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "3:2":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "3:3":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "3:4":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "4:0":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "4:1":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "4:2":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "4:3":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "4:4":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "5:0":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "5:1":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "5:2":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "5:3":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "5:4":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "6:0":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "6:1":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "6:2":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "6:3":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],
      // "6:4":[
      //   "Details for Day 1 of Week 5",
      //   "Details for Day 2 of Week 5",
      //   "Details for Day 3 of Week 5",
      //   "Details for Day 4 of Week 5",
      //   "Details for Day 5 of Week 5"
      // ],

  });
  
  const x = ['Crafting Robots with AI']

  const generateDates = (startWeek) => {
    const startDate = new Date("2024-04-15");
    startDate.setDate(startDate.getDate() + (startWeek - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4);

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const handleViewDetails = (weekIndex) => {
    console.log(selectedWeek," ",weekIndex);
    const details = detailsByWeek[selectedWeek+":"+weekIndex];
    setPopupDetails(details);
  };

  const handleClosePopup = () => {
    setPopupDetails(null);
  };

  const dates = generateDates(selectedWeek);

  return (
    <div className="schedule-container" style={{ marginTop: '10vh', textAlign: 'center', padding:'2vh', background:'#fafafa', }}>
      <h2 style={{ fontSize: '3rem', background: 'linear-gradient(black, blue)', backgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>Syllabus</h2>
      <div style={{ overflowX: 'auto' }}>
  <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", }}>
    <thead>
      <tr>
        {[1].map((week) => (
          <th key={week} onClick={() => handleWeekChange(week)} style={{ padding: "10px", textAlign: "center", cursor: "pointer", backgroundColor: selectedWeek === week ? "#007BFF" : "whitesmoke", transition: "background-color 0.5s", minWidth: "100px" }}>
            {x[week - 1]} <br />(Shedule for the Week)
          </th>
        ))}
      </tr>
    </thead>
  </table>
</div>


      <table style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse", }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Days</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Topics</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Details</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "whitesmoke" }}>
              
              <td style={{ border: "1px solid black", padding: "8px" }}>{[ "Sunday","Day 1", "Day 2", "Day 3", "Day 4", "Day 5"][date.getDay()]}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{[ "Sunday","Introduction To Robotics And Team Building", "Basics of Sensors and Electronics", "Programming and Coding", "Exploring AI & ML", "Final Robotics Challenge And Competition"][date.getDay()]}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button onClick={() => handleViewDetails(index)} className="syllabus-link" style={{ display: "block", textAlign: "center", padding: "5px", textDecoration: "none", color: "#007BFF", cursor: "pointer", backgroundColor: "transparent", border: "none", transition: "background-color 0.3s", }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupDetails && <Popup details={popupDetails} onClose={handleClosePopup} />}
    </div>
  );
};

export default Schedule;