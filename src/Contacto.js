import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ContactData from "./ContactData";
import "./Contacto.scss";

const Contacto = () => {
  const instagram = {
    logo: <InstagramIcon></InstagramIcon>,
    link: "https://instagram.com/petitmacarons",
  };
  const email = {
    logo: <MailOutlineIcon></MailOutlineIcon>,
    link: "mailto:salalazar4@gmail.com",
  };
  const whatsapp = {
    logo: <WhatsAppIcon></WhatsAppIcon>,
    link: "mailto:salalazar4@gmail.com",
  };

  return (
    <div className="contacto-container">
      <div className="contact-info">
        <h1 className="title">¡Contáctanos!</h1>
        <p>
          Para cualquier duda, sugerencia o reclamo, no dudes en ponerte en
          contacto con nosotros en los siguientes canales
        </p>
      </div>
      <div className="contactos">
        <ContactData title={"Instagram"} media={instagram}></ContactData>
        <ContactData title={"Email"} media={email}></ContactData>
        <ContactData title={"Whatsapp"} media={whatsapp}></ContactData>
      </div>
    </div>
  );
};

export default Contacto;
