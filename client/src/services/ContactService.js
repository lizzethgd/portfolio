export const sendMail = ( nameS, emailS, phoneS, subjectS, messageS, contact_meS) => {
    const mail = {
            name: nameS,
            email: emailS,
            phone: parseInt(phoneS),
            subject : subjectS,
            message: messageS,
            contact_me: contact_meS
    }
    console.log(mail)
  
    return fetch('contact_form/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mail) 
    })
      .then(response => {
        return response.json()
      })
      .catch(err => {
       console.log(err)
      })
  }  