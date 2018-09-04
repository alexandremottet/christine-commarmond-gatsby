import React, { Component } from "react";
import Reaptcha from 'reaptcha';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.captcha = null;
    this.state = {
        name: '',
        email: '',
        subject: '',
        body: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onVerify = (response) => {
    console.log('onVerify', this.state.name);
    axios.post('https://us-central1-christine-commarmond.cloudfunctions.net/email/', {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        body: this.state.body
    })
    .then(function (response) {
      toast.success("Votre message a été envoyé", {
        position: toast.POSITION.TOP_CENTER
      });
    })
    .catch(function (error) {
      toast.error("Votre message n'a pu être envoyé", {
        position: toast.POSITION.TOP_LEFT
      });
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onExecute = () => {
    this.captcha.execute();
  };

  render() {
    return (
      <section id="contact">
        <div className="ui centered grid" style={{margin:0, paddingTop: '50px'}}>
          <div className="ten wide column">
            <h1>Contact</h1>
            <ToastContainer className='toast-container' toastClassName="toast-body"/>
            <form className="ui form" action="">
              <div className="field">
                <label>Nom</label>
                <input type="text" name="name" placeholder="Votre nom" value={this.state.name} onChange={this.handleInputChange} required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" name="email" placeholder="Votre email" value={this.state.email} onChange={this.handleInputChange} required />
              </div>
              <div className="field">
                <label>Sujet</label>
                <input type="text" name="subject" placeholder="Le sujet de votre message" value={this.state.subject} onChange={this.handleInputChange} required />
              </div>
              <div className="field">
                <label>Votre message</label>
                <textarea name="body" value={this.state.body} onChange={this.handleInputChange} required />
              </div>
            </form>
            <button className="ui button" type="submit" onClick={this.onExecute}>Envoyer</button>
            <div className="badge-container">
              <Reaptcha
                ref={e => (this.captcha = e)}
                sitekey="6LdME24UAAAAAABesig8BFJG_dRpOFVjBDpFUReP"
                onVerify={this.onVerify}
                size="invisible"
                badge="inline"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
// test : 6LfjE24UAAAAAMi2PTcpt6oztXeWVUQsEIu7A1VS
export default ContactPage
