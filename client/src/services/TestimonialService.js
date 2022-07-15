export const sendTestimonial = async ( nameS, occupationS, companyS, websiteS, testimonialS) => {
    const testimonial = {
            name: nameS,
            occupation: occupationS,
            company: companyS,
            website : websiteS,
            testimonial: testimonialS
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
}

export const getTestimonials = async () =>{
  try {
    const response = await fetch('testimonial_form/')
    return await response.json()
  } catch (err) {
    console.log(err.message)
  }
}

