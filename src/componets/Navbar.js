import React from "react";
import "./Navbar.css";
// import {Link} from "react-router-dom"
// import Typical from "react-typical";
import "./profile.css";
// import span from "react";
// import { BrowserRouter, Link, Outlet, Route, Routes,} from "react-router-dom";
import Typed from 'react-typed';
import "./About/About.css";
import { useState } from "react";
import DJ from "./Images/DJ.png";
import java from "./Images/java.png";
import sql from "./Images/sql.png";
import DA from "./Images/DA.png";

const Navbar = () => {

  const [cards] = useState([
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png',
      title:'Behavioral segmentationa',
      text:'Behavioral segmentation is a type of marketing strategy that filters and groups potential customers based on shared behavioral patterns.',

    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/438px-Python-logo-notext.svg.png',
      title:'Demographic Segmentation',
      text:'Demographic segmentation in marketing is a type of consumer segmentation that involves grouping consumers based on shared demographic characteristics to create better marketing campaigns.',

    },
    {
      image: DJ,
      title:'Psychographic Segmentation',
      text:' Psychographic segmentation breaks down your customer groups into segments that influence buying behaviors, such as: beliefs, values, lifestyle, social status, opinions and activities.',

    },
    {
      image: java,
      title:'Geographic Segmentation',
      text:'Geographic segmentation is a marketing strategy used to target products or services at people who live in, or shop at, a particular location. It works on the principle that people in that location have similar needs, wants, and cultural considerations.',

    },
    {
      image: sql,
      title:'Technographic Segmentation',
      text:'Technographic segmentation is a process of dividing a market into segments based on technology usage. This approach can provide insights into which technologies are being used by customers and prospects, how they are using them, and what Jour needs they have.',

    },
    {
      image: DA,
      title:'Firmographic Segmentation',
      text:'Firmographic data is types of information that can be used to categorize organizations, such as geographic area, number of clients, type of organization, industry, technologies used and so on. The data is used to segment organizations into meaningful categories.',

    },
  ])


  return (
    <>
      {/* <nav>
        <ul className="list">
          <div className="items1">
            Gaurav Hiwarale
          </div>
          <li className="items">Home</li>
          <li className="items" >About</li>
          <li className="items">Contact</li>
          <li className="items">AboutME</li>
        </ul>
        </nav> */}
      <div className="c1">
        <div className="prof-1">
          <div className="prof-2">
            <div className="prof-3"></div>
          </div>
        </div>
        <div className="c2">
          {""}
          <h1 className="head1">
            {" "}
            {/* <Typed
              loop={Infinity}
              steps={[
                "Hello I am Gaurav👋",
                1000,
                "I am a Computer Science Student",
                1000,
                "Full Stack Developer",
                1000,
              ]}
            /> */}
            <Typed
                // className='md:text-6xl sm:text-4xl text-3xl font-bold pl-2'
                strings={['Welcome to my portfolio ! ']}
                typeSpeed={50}
                backSpeed={30}
                loop
              />

          </h1>
          <div className="c3">
            I am learning <span className="sp2">Data Science</span> and I want
            to become a <span className="sp2">Data Scientist</span>
          </div>
        </div>
        <div className="txt">
          <section className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            necessitatibus minus eligendi, pariatur eum sed eius dolor, maxime
            deserunt soluta veritatis sunt nihil. Aliquid perspiciatis facilis
            illum excepturi quas, doloremque veniam debitis libero,
            reprehenderit repellat repudiandae iusto ea nobis recusandae nihil,
            quasi consequatur molestias porro. Voluptas sequi ipsum quasi
            eligendi.
          </section>
        </div>
        <div className="c4">
          <a href="HSC.png" download="Resume HSC.pdf">
            <button className="btn">Get Resume</button>
          </a>
        </div>

        {/* <div className="prof-1">
        <div className="prof-2" >
          <div className="prof-3">
          </div>
        </div>
      </div> */}
      </div>

      {/* <div className="c5">
        <div className="ftr1">
          <div className="ftr2">
            <img src={require("./Images/nav2.png")} alt="error!" />
          </div>
        </div>
      </div> */}

      <div className="main_intro">
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
          sint alias vero et sequi numquam esse tempora eveniet labore
          consectetur nisi iure illo blanditiis molestiae, quos quia. Voluptate
          eaque amet aperiam explicabo commodi iusto suscipit quia accusamus
          expedita, illum et nisi? Adipisci quo laborum illo doloremque quos
          aliquam?
        </div>
        <div className="Intr-pr2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          dolor impedit nobis cum iste modi exercitationem rem veritatis nam
          inventore, facilis dignissimos officiis eveniet temporibus quibusdam,
        </div>
      </div>
      <div className="ab1">Skills/Languages</div>
      <div className="main_i">
        <div className="container">
          {/* <h1 className="head2">Projects</h1> */}
          <div className="cards">
            {
              cards.map((card, i)=>(
                <div key={i} className="card">
                <img src={card.image} alt="error!" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="btnd">
                <button className="btn1">more</button>
                </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
