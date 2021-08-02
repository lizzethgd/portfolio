import {FaTools} from "react-icons/fa"

const Skills = () => {
    return (
        <section className="w3-light-grey">
        <div className="w3-content w3-container w3-padding-64 " id="skills">
            <p className="w3-large"><FaTools/> <b>Skills</b></p>
          <p>Adobe Photoshop</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'90%'}}>90%</div>
          </div>
          <p>Photography</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'80%'}}>
              <div className="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <p>Illustrator</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'75%'}}>75%</div>
          </div>
          <p>Media</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:'50%'}}>50%</div>
          </div>
          <br/>

          <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
          <p>English</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height:'24px', width:'100%'}}></div>
          </div>
          <p>Spanish</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height:'24px', width:'55%'}}></div>
          </div>
          <p>German</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height: '24px', width:'25%'}}></div>
          </div>
          <br/>  
          </div>
        </section>
    )
}

export default Skills
