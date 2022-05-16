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
      <div className="banner-container">
        <img src="/images/tienda.webp" className="banner" alt="" />
        <div className="info">
          <h1 className="title">Visita nuestra tienda</h1>
          <button>Cómo llegar</button>
        </div>
      </div>
      <div className="contact-info">
        <div className="copy">
          <h1 className="title">¡Contáctanos!</h1>
          <p>
            Contacta con nuestro equipo Petit para obetener información
            personalizada sobre regalos corporativos o eventos. Si estas
            interesado en ser uno de nuestros proveedores o si deseas distribuir
            nuestros productos.
          </p>
        </div>
        <div className="contactos">
          <ContactButton title={"Whatsapp"} media={whatsapp}></ContactButton>
          <ContactButton title={"Email"} media={email}></ContactButton>
        </div>
        <div className="comunidad">
          <img src="/images/comunidad.gif" alt="" />
          <div className="comunidad-info">
            <h1 className="title">Unete a nuestra comunidad en Redes</h1>
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
        {/* <img src="/images/principal.png" className="banner sede" alt="" /> */}
        {/* <img src="/images/dist.png" className="banner sede" alt="" /> */}
      </div>
    </div>
  );
};

export default Contacto;
