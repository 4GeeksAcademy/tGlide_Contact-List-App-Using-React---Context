import React, { useContext } from "react";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";

const Contacts = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      {store.contacts.map((contact) => {
        return (
          <div key={contact.id}>
            <ContactCard
              name={contact.name}
              phone={contact.phone}
              address={contact.address}
              email={contact.email}
            />
            <button >Create</button>
            <button>Update</button>
            <button onClick={() => actions.deleteContact(contact.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
