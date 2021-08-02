const Portfolio00 = () => {
    const Parallax = {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

   const onClick = (e) => {
      document.getElementById("img01").src = e.target.src;
      document.getElementById("modal01").style.display = "block";
      const captionText = document.getElementById("caption");
      captionText.innerHTML = 'hola';
    }

    const onClouseFullSizeImage = () => {
      document.getElementById("modal01").style.display='none'
    } 

    return (
        <>
        {/* <!-- Second Parallax Image with Portfolio Text --> */}
<div className="bgimg-2 w3-display-container " style={Parallax}>
  <div className="w3-display-middle">
    <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
  </div>
</div>

{/* <!-- Container (Portfolio Section) --> */}
<div className="w3-content w3-container w3-padding-64" id="portfolio">
  <h3 className="w3-center">MY WORK</h3>
  <p className="w3-center"><em>Here are some of my latest lorem work ipsum tipsum.<br/> Click on the images to make them bigger</em></p><br/>

{/*   <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
  <div className="w3-row-padding w3-center">
    <div className="w3-col m3">
      <img src="https://www.w3schools.com/w3images/p1.jpg" style={{width:'100%'}} onClick={(e) => onClick(e)} className="w3-hover-opacity" alt="The mist over the mountains" />
    </div>

    <div className="w3-col m3">
      <img src="https://www.w3schools.com/w3images/p2.jpg" style={{width:'100%'}} onClick={(e) => onClick(e)} className="w3-hover-opacity" alt="Coffee beans"/>
    </div>

    <div className="w3-col m3">
      <img src="https://www.w3schools.com/w3images/p3.jpg" style={{width:'100%'}} onClick={(e) => onClick(e)} className="w3-hover-opacity" alt="Bear closeup"/>
    </div>

    <div className="w3-col m3">
      <img src="https://www.w3schools.com/w3images/p4.jpg" style={{width:'100%'}} onClick={(e) => onClick(e)} className="w3-hover-opacity" alt="Quiet ocean"/>
    </div>
  </div>

  <div className="w3-row-padding w3-center w3-section">
    <div className="w3-col m3">
      <img src="https://www.w3schools.com/w3images/p5.jpg" style={{width:'100%'}} onClick={(e) => onClick(e)} className="w3-hover-opacity" alt="The mist"/>
    </div>

    <div className="w3-col m3">
      <img src="https://www.w3schools.com/w3images/p6.jpg" style={{width:'100%'}} onClick={(e) => onClick(e)} className="w3-hover-opacity" alt="My beloved typewriter"/>
    </div>

    <div className="w3-col m3">
      <img src="https://www.w3schools.com/w3images/p7.jpg" style={{width:'100%'}} onClick={(e) => onClick(e)} className="w3-hover-opacity" alt="Empty ghost train"/>
    </div>

    <div className="w3-col m3">
      <img src="https://www.w3schools.com/w3images/p8.jpg" style={{width:'100%'}} onClick={(e) =>onClick(e)} className="w3-hover-opacity" alt="Sailing"/>
    </div>
    <button className="w3-button w3-padding-large w3-light-grey" style={{marginTop: '64px'}}>LOAD MORE</button>
  </div>
</div>

{/* <!-- Modal for full size images on click--> */}
<div id="modal01" className="w3-modal w3-black" onClick={onClouseFullSizeImage}>
  <button className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image" onClick={onClouseFullSizeImage}><i className="fa fa-remove" ></i></button>
  <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" className="w3-image" alt='#'/>
    <p id="caption" className="w3-opacity w3-large"></p>
  </div>
</div>

<button className="w3-button w3-light-grey w3-padding-large w3-section">
      <i className="fa fa-download"></i> Download Resume
    </button>
    <p>
      <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
        <i className="fa fa-download w3-margin-right"></i>Download Resume
      </button>
    </p>
    <button type="submit" className="w3-button w3-black w3-margin-bottom">
        <i className="fa fa-download w3-margin-right"></i>Download Resume
        </button>

        <button type="button" className="w3-button w3-red w3-margin-bottom">
        <i className="fa fa-download w3-margin-right"></i>Download Resume
        </button>    
  
</>
    )
}

export default Portfolio00
