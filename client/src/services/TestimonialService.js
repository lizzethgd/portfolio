export default {

  sendTestimonial : async ( nameT, occupationT, companyT, websiteT, testimonialT) => {
      const testimonial = {
              name: nameT,
              occupation: occupationT,
              company: companyT,
              website : websiteT,
              testimonial: testimonialT
      }
      console.log(testimonial)

      try {
      const response = await fetch('testimonial_form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testimonial)
      })
      return await response.json()
    } catch (err) {
      console.log(err.message)
    }
  },

  getTestimonials : async () =>{
    try {
      const response = await fetch('testimonial_form/')
      return await response.json()
    } catch (err) {
      console.log(err.message)
    }
    }

}