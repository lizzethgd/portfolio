import Helsinki from "../assets/images/hel02.png";

const Contact = () => {
    const Parallax = {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
<section id="contact" className="w3-light-grey" >
  <div className="bgimg-3 w3-display-container " style={Parallax}>
    <div className="w3-display-middle">
      <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
    </div>
  </div>

  {/* <!-- Container (Contact Section) --> */}
  <div className="w3-content w3-container w3-padding-16" >
  <h3 className="w3-center">WHERE I WORK</h3>

    <div className="w3-row w3-padding-32 w3-section" >
      <div className="w3-col m4 w3-container">
        <img src={Helsinki} className="w3-image w3-round w3-margin-bottom" alt='#' style={{width:'100%'}} />
        <div className="w3-large w3-margin-bottom">
          <i className="fa fa-map-marker fa-fw w3-text-teal w3-hover-text-black  w3-margin-right"></i> Helsinki, Finland<br/>
          <i className="fa fa-envelope fa-fw  w3-text-teal w3-hover-text-black  w3-margin-right"></i> Email: lizzethgd@gmail.com<br/>
        </div>
      </div>
      <div className="w3-col m8 w3-panel">
        <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
        <form action="/action_page.php" target="_blank">
          <div className="w3-row-padding" style={{margin: '0 -16px 8px -16px'}}>
            <div className="w3-half">
              <input className="w3-input w3-border w3-hover-border-teal" type="text" placeholder="Name" required name="Name" />
            </div>
            <div className="w3-half">
              <input className="w3-input w3-border w3-hover-border-teal" type="text" placeholder="Email" required name="Email" />
            </div>
          </div>
          <div className="w3-section">
             <input className="w3-input w3-border w3-hover-border-teal" type="text" placeholder="Subject" required name="Subject"/>
          </div>
          <div className="w3-section">
            <textarea className="w3-input w3-border w3-hover-border-teal" type="text" placeholder="Message" required name="Message"/>
          </div>
          <input className="w3-check" type="checkbox" readOnly name="Like" />
          <label><em> I'd love your feedback!</em></label>
          <button className="w3-button w3-right w3-teal" type="submit">
            <i className="fa fa-paper-plane"></i> SEND
          </button>
        </form>
      </div>
    </div>

</div>

</section>
)}

export default Contact