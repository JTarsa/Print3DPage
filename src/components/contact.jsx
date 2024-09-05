import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const formatUrl = (url) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [notification, setNotification] = useState(""); // Stan do powiadomienia

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    emailjs
      .sendForm(
        "service_ppifobf",
        "template_uolcj9u",
        e.target,
        "IKwTcbRz4Vop-b0l5"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState(); // Wyczyść formularz po wysłaniu
          setNotification("Wiadomość została pomyślnie wysłana."); // Ustaw powiadomienie
        },
        (error) => {
          console.log(error.text);
          setNotification("Wystąpił błąd podczas wysyłania wiadomości."); // Ustaw powiadomienie o błędzie
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Skontaktuj się z nami</h2>
                <p>
                  Proszę wypełnić poniższy formularz, aby wysłać do nas
                  wiadomość e-mail, a my skontaktujemy się z Tobą tak szybko,
                  jak to możliwe.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name} // Powiąż stan z wartością inputa
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email} // Powiąż stan z wartością inputa
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message} // Powiąż stan z wartością inputa
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Wyślij
                </button>
              </form>
              {notification && (
                <div className="alert alert-info" role="alert">
                  {notification}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>
                <a className="contact-details" href="tel:+48780154807">
                  {props.data ? props.data.phone : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href={props.data ? formatUrl(props.data.instagram) : "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
