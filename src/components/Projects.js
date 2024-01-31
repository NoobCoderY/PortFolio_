import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/bitcoin-3089728_1280.webp";
import projImg2 from "../assets/img/movie.jpg";
import projImg3 from "../assets/img/excel_ms-5bfc379146e0fb00511cdefe.jpg";
import projImg4 from "../assets/img/dash.webp";
import projImg5 from "../assets/img/todo.jpg";
import projImg6 from "../assets/img/burger.png";
import projImg7 from "../assets/img/E-commerce.jpg";
import projImg8 from "../assets/img/quizapp.png";
import projImg9 from "../assets/img/109400301-00b29880-796e-11eb-9a74-a7d9ec286e3b.jpg"
import projImg10 from "../assets/img/twitterImage.png"


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Twitter Clone",
      description: "Nextjs,Tailwind Css,React query, React‑router‑dom ,Graphql-Request,Codegen",
      imgUrl: projImg10,
      link:"https://github.com/NoobCoderY/Twitter_Client"
    },
    {
      title: "Crypto App",
      description: "React.js, React‑router‑dom, Material‑UI, Firebase",
      imgUrl: projImg1,
      link:"https://github.com/NoobCoderY/Crypto_app"
    },
    {
      title: "MOVIES APP",
      description: "JavaScript, React, HTML, CSS, Local Storage",
      imgUrl: projImg2,
      link:"https://github.com/NoobCoderY/MoviesApp"
    },
    {
      title: "DashBoard",
      description: "React.js MUI",
      imgUrl:projImg4 ,
      link:"https://github.com/NoobCoderY/Admin_DashBoard"
    },
    {
      title: "Excel-Clone",
      description: " Vanila JavaScript, DOM, HTML, CSS",
      imgUrl: projImg3,
      link:"https://github.com/NoobCoderY/Excel_Clone"
    },
   
    {
      title: "ToDo APP",
      description: "React.js Local Storage",
      imgUrl: projImg5,
  
    },
  
  ];
  const projects1 = [
    {
      title: "Twitter Clone",
      description: "Node.js,Express.js,Graphql,Prisma Orm,Superbase,Redis,Google OAuth,JSON WEB TOKENS,AWS",
      imgUrl: projImg10,
      link:"https://github.com/NoobCoderY/Twitter_Server"
    },
    {
      title: "Burger Wala",
      description: "React.js,Node.js,MongoDB,Express.js,Passport.js Framer Motion Redux SASS",
      imgUrl: projImg6,
      link:"https://github.com/NoobCoderY/Burger_WALA"
    },
  
    {
      title: "DashBoard",
      description: "React.js MUI Redux Express.js Node.js MongoDB,Chart.js",
      imgUrl:projImg4 ,
      link:"https://github.com/NoobCoderY/Admin_DashBoard"
    },
    {
      title: "E-commerce",
      description: " JavaScript,Node.js,Express.js,MongoDb",
      imgUrl: projImg7,
      link:"https://github.com/NoobCoderY/e-commerce__backend"
    },
   
    {
      title: "Quiz App",
      description: "Node.js,MongoDB,Express.js,Postman",
      imgUrl: projImg8,
  
    },
  
  ];
  const projects2 = [
    {
      title: "Twitter Clone",
      description: "Node.js,Express.js,Graphql,Prisma Orm,Superbase,Redis,Google OAuth,AWS,Nextjs,Tailwind Css,React query",
      imgUrl: projImg10,
      link:"https://github.com/NoobCoderY/Twitter_Server"
    },
    {
      title: "Burger Wala",
      description: "React.js,Node.js,MongoDB,Express.js,Passport.js Framer Motion Redux SASS",
      imgUrl: projImg6,
      link:"https://github.com/NoobCoderY/Burger_WALA"
    },
  
    {
      title: "DashBoard",
      description: "React.js MUI Redux Express.js Node.js MongoDB,Chart.js",
      imgUrl:projImg4 ,
      link:"https://github.com/NoobCoderY/Admin_DashBoard"
    },
    {
      title: "Crypto App",
      description: "React.js, React‑router‑dom, Material‑UI, Firebase",
      imgUrl: projImg1,
      link:"https://github.com/NoobCoderY/Crypto_app"
    },

    
    {
      title: "E-commerce",
      description: " JavaScript,Node.js,Express.js,MongoDb",
      imgUrl: projImg7,
      link:"https://github.com/NoobCoderY/e-commerce__backend"
    },  
    
    {
      title: "Excel-Clone",
      description: " Vanila JavaScript, DOM, HTML, CSS",
      imgUrl: projImg3,
      link:"https://github.com/NoobCoderY/Excel_Clone"
    },

  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am a skilled MERN developer, I have done many projects on FullStack with React.js Express.js Node.js MongoDB.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{cursor:"pointer"}}>Frontend Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"  style={{cursor:"pointer"}}>Backend Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"  style={{cursor:"pointer"}}>All Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    {
                      projects1.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    {
                      projects2.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
