import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import ContactButton from "./ContactButton";
import "./Contacto.scss";

const Contacto = () => {
  const instagram = {
    logo: <InstagramIcon></InstagramIcon>,
    link: "https://instagram.com/petit.macarons",
  };
  const email = {
    logo: <MailOutlineIcon></MailOutlineIcon>,
    link: "mailto:salalazar4@gmail.com",
  };
  const whatsapp = {
    logo: <WhatsAppIcon></WhatsAppIcon>,
    link: "https://api.whatsapp.com/send?phone=573196210875",
  };
  const facebook = {
    logo: <FacebookIcon></FacebookIcon>,
    link: "https://www.facebook.com/Petit-macarons-115686070349436",
  };

  return (
    <div className="contacto-container">
      <img src="/images/tienda.jpg" className="banner" alt="" />
      <div className="contact-info">
        <h1 className="title">¡Contáctanos!</h1>
        <p>
          Contacta a nuestro Petit para asesoría, preguntas de productos o para
          convertirte en uno de nuestros distribuidores.
        </p>
        <div className="contactos">
          <ContactButton title={"Whatsapp"} media={whatsapp}></ContactButton>
          <ContactButton title={"Email"} media={email}></ContactButton>
        </div>
        <div className="comunidad">
          <img src="/images/comunidad.gif" alt="" />
          <div className="comunidad-info">
            <h1 className="title">Unete a nuestra comunidad en Instagram</h1>
            <p>¡Visítanos!</p>
            <div className="contactos">
              <ContactButton
                title={"Instagram"}
                media={instagram}
              ></ContactButton>
              <ContactButton
                title={"Facebook"}
                media={facebook}
              ></ContactButton>
            </div>
          </div>
        </div>
        <img src="/images/principal.png" className="banner sede" alt="" />
        <img src="/images/dist.png" className="banner sede" alt="" />
      </div>
    </div>
  );
};

export default Contacto;
