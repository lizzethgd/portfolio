  
  /* // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  
  const myFunction = () => {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar w3-card w3-animate-top w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  const toggleFunction = () => {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") === -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  } */
<>
  <form className="w3-container w3-card-4 w3-padding-16 w3-white" action="/action_page.php" target="_blank">
  <div className="w3-section w3-half">      
    <label>Name</label>
    <input className="w3-input w3-hover-border-black" type="text" name="Name" required />
  </div>
  <div className="w3-section w3-half">      
    <label>Email</label>
    <input className="w3-input w3-hover-border-black" type="text" name="Email" required />
  </div>
  <div className="w3-section">      
    <label>Subject</label>
    <input className="w3-input w3-hover-border-black" type="text" name="Subject" required />
  </div> 
  <div className="w3-section">      
    <label>Message</label>
    <input className="w3-input w3-hover-border-black" type="text" name="Message" required />
  </div>  
  <input className="w3-check " type="checkbox" checked name="Like" />
  <label> Contact me!</label>
  <button class="w3-button w3-right w3-teal" type="submit">
      <i class="fa fa-paper-plane"></i> SEND
    </button>
  </form>


<div className="w3-container w3-content w3-padding-64 w3-theme-l5 " id="contact"  style={{width:'100vw'}}>
  <div className="w3-row">
    <div className="w3-col m5 w3-container ">
    <img src={Helsinki} className="w3-image w3-round" alt='#' style={{width:'90vw', marginBottom: '1em'}} /> 
    <div class="w3-large w3-margin-bottom">
      <p><i className="fa fa-map-marker w3-text-teal w3-xlarge"></i>  Helsinki, Finland</p>
      <p><i className="fa fa-envelope-o w3-text-teal w3-xlarge"></i>  lizzethgd@gmail.com</p>
    </div>
    </div>
    <div className="w3-col m7">
    <form action="/action_page.php" target="_blank">
                <div className="w3-row-padding" style={{margin: '0 -16px 8px -16px'}}>
                  <div className="w3-half">
                  <label>Name</label>
                    <input className="w3-input w3-border w3-hover-border-black" type="text" placeholder="Name" required name="Name"/>
                  </div>
                  <div className="w3-half">
                  <label>Email</label>
                    <input className="w3-input w3-border w3-hover-border-black" type="text" placeholder="Email" required name="Email"/>
                  </div>
                </div>
                <div class="w3-section">
                <label>Subject</label>
                <input className="w3-input w3-border w3-hover-border-black" type="text" placeholder="Subject" required name="Subject"/>
                </div>
                <div class="w3-section">
                <label>Message</label>
                <input className="w3-input w3-border w3-hover-border-black" type="text" placeholder="Message" required name="Message"/>
                </div>
                <input className="w3-check " type="checkbox" checked name="Like" />
      <label> Contact me!</label>
      <button class="w3-button w3-right w3-teal" type="submit">
          <i class="fa fa-paper-plane"></i> SEND
        </button>
    </form>
    
    </div>
  </div>
</div>

</>