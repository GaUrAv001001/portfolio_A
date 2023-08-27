import React from "react";
import "./About.css";
import { ReactDOM } from "react";


function Box(){
  return(
    <div className="box1">
    <div className="box2">
      <img src={require('../Images/python.png')} alt="error!" className="box2_image" />
      <div className="box2_text">
        <span className="box2_type"></span>
        <h3 className="box2_title">Python</h3>
        <a href="" target="blank">
          <button>Know More</button>
        </a>
      </div>
    </div>
  </div>
  )
}
const About = () => {
  return (
    <>
    {/* <div className="main_intro">
      <div className="Intr">
        Short Introduction <br></br>About My Self 
      </div>
      <div className="Intr-pr1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        dolor impedit nobis cum iste modi exercitationem rem veritatis nam
        inventore, facilis dignissimos officiis eveniet temporibus quibusdam,
        aspernatur quaerat at ad quos ut. Expedita voluptatibus voluptate
        perspiciatis repellat molestias beatae saepe rem illo obcaecati,
        exercitationem voluptatum aliquid dolorum sit aperiam ea. Reiciendis
        sint alias vero et sequi numquam esse tempora eveniet labore consectetur
        nisi iure illo blanditiis molestiae, quos quia. Voluptate eaque amet
        aperiam explicabo commodi iusto suscipit quia accusamus expedita, illum
        et nisi? Adipisci quo laborum illo doloremque quos aliquam?
      </div>
      <div className="Intr-pr2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        dolor impedit nobis cum iste modi exercitationem rem veritatis nam
        inventore, facilis dignissimos officiis eveniet temporibus quibusdam,
      </div>
      </div>
      <div className="ab1">About Me</div>
      <div className="ab2">
      </div> */}
    </>
  );
};
export default About;
