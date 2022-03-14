import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Zoom from 'react-reveal/Zoom';


const Subscribe = () => {
  const [sub, setSub] = useState({
    user_email: "",
  });

  const handelChange = (e) => {
    setSub({ ...sub, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_jebw0yc",
      "template_asmcg9s",
      e.target,
      "5yiwbQYUCSC8hASYD"
    );
    setSub({
      user_email: "",
    });

    try {
      toast.success("Merci de votre abonnement", {
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
    <div className="secondBG-Color my-5 p-5">
      <div className=" container">
      <div className="row row-30 justify-content-center ">
        <div className="col-sm-8 col-lg-7 text-center">
          <div>
            <Zoom>
            <h2 className=" my-5 display-6">
              Abonnez-vous à nos actualités et mises à jour régulières
            </h2>
            </Zoom>
          </div>
        </div>
        <div className="col-md-7 col-lg-6">
        <Zoom>
          <form className=" d-flex align-items-center" onSubmit={sendEmail}>
            <input
              name="user_email"
              value={sub.user_email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handelChange}
            />
            <button className="btn btn-primary" type="submit">
              Abonner
            </button>
          </form>
          </Zoom>
        </div>
      </div>
      <ToastContainer />
      </div >
    </div>
  );
};

export default Subscribe;
