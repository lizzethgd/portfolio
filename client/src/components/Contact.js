import Helsinki from "../assets/images/hel02.png";
import {useState} from 'react'
import {sendMail} from '../services/ContactService'
import { useTranslation} from 'react-i18next';

const Contact = () => {

  const [mail, setMail] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })  

  //const [contact_me, setContact_me] =useState(false)
  
  const {name, email, phone, subject, message} = mail
  
  const handleChange = e => {
    setMail({ ...mail, [e.target.name]: e.target.value })
}

  //const handleCheckbox = () =>{setContact_me(!contact_me)}

  const handleSubmit = e => {
    e.preventDefault();
    sendMail(name, email, phone, subject, message, contact_me)
    setMail({ ...mail, name: '', email: '',  phone: '', subject: '',   message: ''})
    //setContact_me(false)
  }

  const Parallax = {
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  }
    
  const { t } = useTranslation("global");
return (
<section id="contact" className="w3-light-grey" >
  <div className="bgimg-3 w3-display-container " style={Parallax}>
    <div className="w3-display-middle">
      <span className="w3-xxlarge w3-text-white w3-wide">{t("nav.contact")}</span>
    </div>
  </div>

  {/* <!-- Container (Contact Section) --> */}
  <div className="w3-content w3-container w3-padding-16" >

    <div className="w3-row w3-padding-18 " >
      <div className="w3-col m4 w3-panel">
        <img src={Helsinki} className="w3-image w3-round w3-margin-bottom" alt='#' style={{width:'100%'}} />
        <div className="w3-large w3-margin-bottom">
          <i className="fa fa-map-marker fa-fw w3-text-teal w3-hover-text-black  w3-margin-right"></i> Helsinki, {t("contact.fi")}<br/>
          <i className="fa fa-envelope fa-fw  w3-text-teal w3-hover-text-black  w3-margin-right"></i> lizzethgd@gmail.com<br/>
        </div>
      </div>
      <div className="w3-col m8 w3-panel">
        <form onSubmit={handleSubmit} target="_self">
          <div className="w3-row-padding" style={{margin: '0 -16px 8px -16px'}}>
            <div className="w3-half">
              <input className="w3-input w3-border w3-hover-border-teal" type="text" placeholder={t("contact.form.name")} required name='name' value={name} onChange={handleChange}/>
            </div>
            <div className="w3-half">
              <input className="w3-input w3-border w3-hover-border-teal" type="text" placeholder={t("contact.form.email")} required name='email' value={email} onChange={handleChange}/>
            </div>
          </div>
          <div className="w3-row-padding" style={{margin: '0 -16px 8px -16px'}}>
            <div className="w3-half">
              <input className="w3-input w3-border w3-hover-border-teal" type="text" placeholder={t("contact.form.subject")} required name='subject' value={subject} onChange={handleChange}/>
            </div>
            <div className="w3-half">
              <input className="w3-input w3-border w3-hover-border-teal" type="text" placeholder={t("contact.form.phone")} name='phone' value={phone} onChange={handleChange}/>
            </div>
          </div>
            <textarea className="w3-input w3-border w3-hover-border-teal" type="text" placeholder={t("contact.form.message")} required name='message' value={message} onChange={handleChange}/>
          <div className="w3-section">
          {/* <input className="w3-check " type="checkbox" name="contact_me" checked={contact_me} onChange={handleCheckbox}/>
              <label><em>{t("contact.response")}</em></label> */}
          <button className="w3-button w3-right w3-teal" type="submit" >
            <i className="fa fa-paper-plane" />{t("send")}
          </button>
          </div>
        </form>
      </div>
    </div>

</div>

</section>
)}

export default Contact