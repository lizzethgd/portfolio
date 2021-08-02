import Helsinki from "../assets/images/timeline04.jpg";

const Contact01 = () => {
    const Parallax = {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
        <>
        {/* <!-- Third Parallax Image with Portfolio Text --> */}
<div className="bgimg-3 w3-display-container" style={Parallax}>
  <div className="w3-display-middle">
     <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
  </div>
</div>
            {/* <!-- Container (Contact Section) --> */}
<div className="w3-content w3-container w3-padding-64" id="contact">
  <h3 className="w3-center">WHERE I WORK</h3>
  <p className="w3-center"><em>I'd love your feedback!</em></p>

  <div className="w3-row w3-padding-32 w3-section">
    <div className="w3-col m4 w3-container">
      <img src={Helsinki} className="w3-image w3-round" alt='#' style={{width:'100%'}} />
    </div>
    <div className="w3-col m8 w3-panel">
      <div className="w3-large w3-margin-bottom">
        <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Chicago, US<br/>
        <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +00 151515<br/>
        <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: mail@mail.com<br/>
      </div>
      <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
      <form action="/action_page.php" target="_blank">
        <div className="w3-row-padding" style={{margin: '0 -16px 8px -16px'}}>
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
          </div>
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
          </div>
        </div>
        <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
        <button className="w3-button w3-teal w3-right w3-section" type="submit">
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </form>
    </div>
  </div>
</div>

        </>
    )
}

export default Contact01
