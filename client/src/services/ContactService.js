export const sendMail = ( nameC, emailC, phoneC, subjectC, messageC, contact_meC) => {
    const mail = {
            name: nameC,
            email: emailC,
            phone: parseInt(phoneC),
            subject : subjectC,
            message: messageC,
            contact_me: contact_meC
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