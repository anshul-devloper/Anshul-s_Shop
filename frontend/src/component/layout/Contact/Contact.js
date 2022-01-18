import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <div className="contactContainer">
      <MetaData title="CONTACT-Anshul's_Shop" />
      <a className="mailBtn" href="mailto:anshulpro27@gmail.com">
        <Button>Contact: anshulpro27@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
