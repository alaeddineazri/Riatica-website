import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Zoom from "react-reveal/Zoom";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    user_email: "",
    message: "",
  });

  const handelChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_jebw0yc",
      "template_pebgwgn",
      e.target,
      "5yiwbQYUCSC8hASYD"
    );
    setInfo({
      name: "",
      user_email: "",
      message: "",
    });

    try {
      toast.success("Merci, votre message a bien été envoyé !", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      toast.error(err, {
        theme: "colored",
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <div id="contatctus" className="container p-5 ">
      <div className="row row-30 align-items-lg-center justify-content-center">
        <div className="col-lg-6 text-center">
          <div>
            <Zoom left>
              <img
                className="w-100"
                src="images/home__section__9.png"
                alt="home__section__9"
              />
            </Zoom>
          </div>
        </div>
        <div className="col-lg-6 ">
          <Zoom right>
          <h2 className="display-6 py-3">Contacter Notre Equipe</h2>
          <form onSubmit={sendEmail} className="py-3">
            <div className="form-group ">
              <label className="my-2" for="exampleInputPassword1">
                Nom
              </label>
              <input
                name="name"
                value={info.name}
                className="form-control"
                onChange={handelChange}
                placeholder="Nom"
                required
              />
            </div>
            <div className="form-group">
              <label className="my-2" for="exampleInputEmail1">
                Address Mail
              </label>
              <input
                type="email"
                name="user_email"
                value={info.user_email}
                onChange={handelChange}
                className="form-control"
                placeholder="Email"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
              </small>
            </div>
            <div className="form-group">
              <label className="my-2" for="exampleInputEmail1">
                Message
              </label>
              <textarea
                name="message"
                onChange={handelChange}
                value={info.message}
                className="form-control "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Votre message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary my-3">
              Submit
            </button>
          </form>
          </Zoom>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
