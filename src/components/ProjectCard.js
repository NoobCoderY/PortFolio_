import { Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai"

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (

    <Col size={12} sm={6} md={4}>
      <a href={link} style={{cursor:"pointer"}}>

        <div className="proj-imgbx" style={{ height: "250px", objectFit: "cover" }}>
          <img src={imgUrl} style={
            { width: "100%", height: "100%" }
          } />
          <div className="proj-txtx" >
            <h4 style={{color:"white"}}>{title}</h4>
            <div style={{color:"white"}}>{description}</div>
            <div>

            </div>
          </div>
        </div>

      </a>
    </Col>

  )
}
