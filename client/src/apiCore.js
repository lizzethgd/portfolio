export const sendMail = ( nameC, emailC, phoneC, subjectC, messageC ) => {
    const mail = {
            name: nameC,
            email: emailC,
            phone: parseInt(phoneC),
            subject : subjectC,
            message: messageC
    }
    console.log(mail)
  
    return fetch('contact_form/send', {
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
  