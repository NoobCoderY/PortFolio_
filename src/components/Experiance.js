import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/HomeWork';

function Experience() {
  return (
    <div className="experience" id="Experiance" style={{marginBottom:"2em" ,color:"grey"}}>
    <h1 style={{textAlign:"center",color:"white" ,marginTop:"10px"}}>Experiance</h1>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background:"#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            VVS Inter College
          </h5>
          <p> Intermediate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h5 className="vertical-timeline-element-title">
           Harcourt Butler Technical University
          </h5>

          <h6 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h6>

          <p> Computer Science And Engineering</p>
        </VerticalTimelineElement>
            <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" 1 Dec 2021 -19 jan 2022 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Frontend developer Intern - Lueur Tech Software Solution 
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
           Remote
          </h6>
          <p>
          Developed an E‑Commerce website using HTML, CSS JavaScript..
          </p>
        </VerticalTimelineElement>
    
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="19 jan 2022 -  19 march 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Frontend developer Intern - WEBNU
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
            Remote
          </h6>
          <p>Developed the frontend using HTML and CSS to make the website dynamic JavaScript is used..</p>
        </VerticalTimelineElement>
         <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Feb 2023 -April 2023 "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Full Stack Developer Intern-Amar Designer
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
           Remote
          </h6>
          <p>
          Developed a Full Home interior design Website using React.js, tailwind, Firebase and Node.js, Express.js, Mongo DB

          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" jun 2023 -Present "
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Full Stack Developer Intern-Simplem solutions
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
           Remote
          </h6>
          <p>
         My work involves working on the frontend and backend of the LMS web application using MERN technology and SQL.

          </p>
        </VerticalTimelineElement>
    </div>
  );
}

export default Experience;
