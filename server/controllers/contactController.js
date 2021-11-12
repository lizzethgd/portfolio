const nodemailer = require('nodemailer')
const Contact= require('../models/Contact');

exports.sendContact = async (req, res) => {

const {name, email, phone, subject, message, contact_me} = req.body

try {
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
      contact_me
    });

    const contactSaved = await newContact.save();

    res.status(201).json(contactSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }

    contentHTML= `
        <h1>Contact Information<h1>
        <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        ${phone!=undefined ? `<li>Phone: ${phone}</li>` : ' '} 
        <li>Subject: ${subject}</li>
        <li>Contact me: ${contact_me}</li>
        </ul>
        <p>Message: ${message}</p>
     `
    const transporter = nodemailer.createTransport({
        //host: "smtp.mail.yahoo.com",
        host: 'smtp.office365.com',
        //port: 465,
        port: 587,
        secure: false, // use TLS
        auth: {
            user: "lizzeth_angela@hotmail.com",
            pass: process.env.MAILPSS
        //pass: "kncbliyetlwukjpr",
            },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
        debugg: false,
        logger: true
    });

    const feed = await transporter.sendMail({
        from: "LizzethGD Portafolio Server <lizzeth_angela@hotmail.com>",
        to: "lizzethgd@gmail.com",
        subject: "Lizzeth Portfolio Contact Form",
        html: contentHTML
        })

    const feedback = await transporter.sendMail({
        from: "LizzethGD Portafolio Server <lizzeth_angela@hotmail.com>",
        to: email,
        subject: "Lizzeth Portfolio Contact Form",
        text: 'Thank you for your feedback!'
        }) 

    console.log(contentHTML)
    console.log('Message has been sent and contact was added to the DB')
}