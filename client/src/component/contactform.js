import React from 'react'
import '../style/contactform.css'
import axios from 'axios';
import Nav from './Navbar'

const contact = (e) => {
  e.preventDefault()
  let firstname = e.target[0].value
  let lastname = e.target[1].value
  let email = e.target[2].value
  let description = e.target[3].value
  let file = e.target[4].value
  console.log(firstname)
  axios.post('http://localhost:3000/api/contactus',
    {
      firstname: firstname,
      lastname: lastname,
      email: email,
      description: description,
      file: file
    }).then((res) => {
      console.log(res.data)
      window.alert('Check your Email')
    })
   
}

function ContactForm() {

  return (

    <div className="container contact">
      <Nav /><br /><br />

      <h3>Get In Touch</h3><br />
      <form className="form" onSubmit={contact} encType="multipart/form-data">
        <div className="row">
          <div className="col">
            <div>

              <label for="formControlInput" className="form-label"> First Name</label>
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
          </div>
          <div className="col">
            <div>
              <label for="formControlInput" className="form-label"> Last Name </label>
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
          </div>
        </div>

        <br />
        {/* <div>
            <label for="formControlInput" className="form-label"> First Name</label>
            <input type="text" className="form-control"  placeholder="First Name" />
          </div>

          <div>
            <label for="formControlInput" className="form-label"> Last Name </label>
            <input type="text" className="form-control" placeholder="Last Name"/>
          </div> */}

        <div>
          <label for="formControlInput" className="form-label"> Email </label>
          <input type="text" className="form-control" placeholder="abc@gmail.com" />
        </div>
        <br />
        <div>
          <label for="formControlInput" className="form-label"> Description</label>
          <textarea className="form-control" id="floatingTextarea" rows="3"></textarea>
        </div>
        <br />
        <div>
          <label for="formFile" className="form-label text-start">  Default file input </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <br />
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Sent an Email</label>
        </div>
        <div className="text-center">
          <input type="submit" value="Submit" id="submitbtn" class="btn btn-outline-primary" />
        </div>
      </form>
    </div>
  );
}
export default ContactForm
