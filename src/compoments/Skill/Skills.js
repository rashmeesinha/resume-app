import React from "react";
import "./skill.css";
import SkillBox from "./SkillBox";
import reactImg from "./react-img.png";
import jsImg from "./javascript.png";
import dbImg from "./database.png";
import testImg from "./test.png";

class Skill extends React.Component {
  render() {
    return (
      <div>
        <p align="center " id="skillHeader">
          My Skills
        </p>
        <div className="skill">
          <SkillBox
            skillType="Frameworks and Libraries"
            skill1="React Js"
            skill2="Redux, Hooks"
            skill3="Material UI" skillImg={reactImg}
          />
          <SkillBox 
          skillType="Languages"
          skill1="Javascript, ES6, TYPESCRIPT, NPM"
          skill2="Core Java, collection FrameWork"
          skill3="HTML& CSS, JSX" skillImg={jsImg}
          />
          <SkillBox
           skillType="DataBases"
           skill1="MySQL"
           skill2="Oracle"
           skill3="FireBase" skillImg={dbImg}
            />
          <SkillBox 
           skillType="Testing Tools"
           skill1="Mocha"
           skill2="Jasmine"
           skill3="TestNG" skillImg={testImg}
          />
        </div>
      </div>
    );
  }
}

export default Skill;
