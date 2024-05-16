import React from "react";

const ContactCard = ({ name, phone, address, email }) => {
  return (
    <>
      <div>
        <div className="contact">
          <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
          <div className="Contact-info">
            <p className="contact-name">{name}</p>
            <p className="contact-phone">{phone}</p>
            <p className="contact-address">{address}</p>
            <p className="contact-email">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
