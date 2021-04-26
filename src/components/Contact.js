import React from "react";

const Contact =()=> (
      <React.Fragment>
        <section className="contact puff-in-center" id="contact">
          <form
            action="https://formspree.io/katrinsalac@gmail.com"
            method="POST"
          >
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  size="15"
                  maxLength="30"
                  required
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  name="company"
                  placeholder="company"
                  size="15"
                  maxLength="30"
                ></input>
              </li>
              <li>
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail"
                  size="15"
                  maxLength="30"
                  required
                ></input>
              </li>
              <li>
                <textarea
                  name="message"
                  cols="20"
                  rows="10"
                  placeholder="message"
                  required
                ></textarea>
              </li>
              <button type="submit"><i className="far fa-handshake"></i></button>
            </ul>
          </form>
          <p className="collab">Collaborate<br></br><span id="next-line-intent">with me...</span></p>
          {/* <a className="avatar" id="avatar" href="mailto:katrinsalac@gmail.com">
            <h4 className="emailclick">email me!</h4>
          </a> */}
        </section>
      </React.Fragment>
    );

export default Contact;
