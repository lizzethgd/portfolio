import React from 'react'

const Skills = () => {
    return (
        <div className="w3-container w3-light-grey w3-padding-64">
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <h3>Our Skills.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
            tempor incididunt ut labore et dolore.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
            tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="w3-col m6">
            <p className="w3-wide"><i className="fa fa-camera w3-margin-right"></i>Photography</p>
            <div className="w3-grey">
              <div className="w3-container w3-dark-grey w3-center" style={{width:'90%'}}>90%</div>
            </div>
            <p className="w3-wide"><i className="fa fa-desktop w3-margin-right"></i>Web Design</p>
            <div className="w3-grey">
              <div className="w3-container w3-dark-grey w3-center" style={{width:'85%'}}>85%</div>
            </div>
            <p className="w3-wide"><i className="fa fa-photo w3-margin-right"></i>Photoshop</p>
            <div className="w3-grey">
              <div className="w3-container w3-dark-grey w3-center" style={{width:'75%'}}>75%</div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Skills
